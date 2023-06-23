import { ObjectId } from "mongodb";
import nc from "next-connect";
import connectToDatabase from "../../../../utils/mongodb";

const handler = nc();

// GET /api/v1/products/:id
handler.get(async (req, res) => {
  const { id } = req.query;
  try {
    const { db } = await connectToDatabase();
    const vehicle = await db
      .collection("vehicles")
      .findOne({ _id: new ObjectId(id) });
    if (!vehicle) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json({ vehicle });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el vehículo." });
  }
});

// PUT /api/v1/products/:id
handler.put(async (req, res) => {
  const { id } = req.query;
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
      visibility,
      email,
      whatsapp,
      image,
      message,
    } = req.body;
    const result = await db.collection("vehicles").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
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
        },
      }
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
    const result = await db
      .collection("vehicles")
      .deleteOne({ _id: new ObjectId(id) });
    res.status(200).json({ message: "Producto eliminado correctamente." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el producto." });
  }
});

export default handler;
