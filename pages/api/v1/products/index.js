import { ObjectId } from "mongodb";
import nc from "next-connect";
import connectToDatabase from "../../../../utils/mongodb";

const handler = nc();

// GET /api/v1/products
handler.get(async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const vehicles = await db.collection('vehicles').find().toArray();
    res.status(200).json({vehicles});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los vehiculos." });
  }
});

// POST /api/v1/products
handler.post(async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const { nameCar, description, model, km, price, ubication, status, email, urlimagepost, message } = req.body;
    const result = await db.collection("vehicles").insertOne({ nameCar, description, model, km, price, ubication, status, email, urlimagepost, message });
    res.status(201).json(result.ops[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear el producto." });
  }
});

// PUT /api/v1/products/:id
handler.put(async (req, res) => {
  const { id } = req.query;
  try {
    const { db } = await connectToDatabase();
    const { nameCar, description, model, km, price, ubication, status, email, urlimagepost, message } = req.body;
    const result = await db.collection("vehicles").updateOne(
      { _id: ObjectId(id) },
      { $set: { nameCar, description, model, km, price, ubication, status, email, urlimagepost, message } }
    );
    res.status(200).json({ message: "Producto actualizado correctamente." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el producto." });
  }
});

// DELETE /api/v1/products/:id
handler.delete(async (req, res) => {
  const { id } = req.query;
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection("vehicles").deleteOne({ _id: ObjectId(id) });
    res.status(200).json({ message: "Producto eliminado correctamente." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el producto." });
  }
});

export default handler;
