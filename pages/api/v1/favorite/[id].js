import nc from "next-connect";
import { getSession } from 'next-auth/react'
import { ObjectId } from "mongodb";
import connectToDatabase from "../../../../utils/mongodb";

const handler = nc();

// GET /api/v1/favorite/:id
handler.get(async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    try {
      // Accede a los datos de la sesión
      const address = session.address

      const { db } = await connectToDatabase();
      const { id } = req.query;
      const favorite = await db.collection('favorite').findOne({ address: address, id: id });

      res.status(200).json({ favorite })
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el favorito." });
    }
  } else {
    res.status(401).json({ error: 'No se ha iniciado sesión' })
  }
});

// DELETE /api/v1/favorite/:id
handler.delete(async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    const address = session.address
    const { id } = req.query;
    try {
      const { db } = await connectToDatabase();
      const result = await db.collection("favorite").deleteOne({ address: address, id: id });
      res.status(200).json({ message: "Producto eliminado correctamente." });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error al eliminar el producto." });
    }
  } else {
    res.status(401).json({ error: 'No se ha iniciado sesión' })
  }
});


// POST /api/v1/favorite/:id
handler.put(async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    const address = session.address
    try {
      const { db } = await connectToDatabase();
      const { id } = req.query;

      console.log(req.body);
      const result = await db.collection("favorite").insertOne({
        id,
        address
      });
      res.status(200).json({ result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error al guardar el vehiculo." });
    }
  } else {
    res.status(401).json({ error: 'No se ha iniciado sesión' })
  }
});

export default handler;
