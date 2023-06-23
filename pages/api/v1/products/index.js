import nc from "next-connect";
import connectToDatabase from "../../../../utils/mongodb";

const handler = nc();

// GET /api/v1/products
handler.get(async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const vehicles = await db.collection("vehicles").find().toArray();
    res.status(200).json({ vehicles });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los vehiculos." });
  }
});

// POST /api/v1/products
handler.post(async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const {
      name,
      description,
      model,
      km,
      price,
      ubication,
      status,
      email,
      whatsapp,
      image,
      message,
      visibility,
      attributes,
      wallet,
    } = req.body;
    console.log(req.body);
    const result = await db.collection("vehicles").insertOne({
      name,
      description,
      model,
      km,
      price,
      ubication,
      status,
      visibility,
      email,
      whatsapp,
      image,
      message,
      attributes,
      wallet,
    });
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al guardar el vehiculo." });
  }
});

export default handler;
