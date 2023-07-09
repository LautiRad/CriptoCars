import nc from "next-connect";
import connectToDatabase from "../../../../utils/mongodb";
import { getSession } from 'next-auth/react'

const handler = nc();

// GET /api/v1/favorite
handler.get(async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    try {
      // Accede a los datos de la sesión
      const address = session.address

      const { db } = await connectToDatabase();
      var favorite = await db.collection('favorite').find({ address: address }).toArray();

      var vehicles = await db.collection("vehicles").find().toArray();
      favorite = favorite.map(objeto1 => {
        const objeto2 = vehicles.find(objeto2 => objeto1.id == objeto2._id);
        return { ...objeto2, favorite: true };
      });

      res.status(200).json({ favorite })
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los favoritos." });
    }
  } else {
    res.status(401).json({ error: 'No se ha iniciado sesión' })
  }
});

// POST /api/v1/favorite
handler.post(async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    const address = session.address
    try {
      const { db } = await connectToDatabase();
      const {
        id
      } = req.body;
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
