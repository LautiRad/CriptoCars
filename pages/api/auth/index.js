import connectToDatabase from "../../../utils/mongodb";

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();
    const { id, address } = req.body;
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
