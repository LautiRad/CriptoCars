import connectToDatabase from "../../../utils/mongodb";

export default async function handler(req, res, address) {
  try {
    const { db } = await connectToDatabase();
    const { id } = req.body;
    console.log(`Authenticating user ${id} with address ${address}`);

    const existingUser = await db.collection("users").findOne({ id });
    if (existingUser) {
      await db
        .collection("users")
        .updateOne({ id }, { $set: { authenticated: true, address } });
      res.status(200).json({ message: "User authenticated successfully" });
    } else {
      await db.collection("users").insertOne({ id, address });
      res.status(200).json({ message: "User created successfully", nonce });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const token = await getToken({ req: context.req });
  const address = token?.sub ?? null;

  return {
    props: {
      address,
      session,
    },
  };
};
