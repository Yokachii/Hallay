import sequelize from '../../module/sequelize'

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
        await sequelize.initializeDatabase()
        const {name,picture,badge} = req.body
        await sequelize.models.team.create({
          name:name,
          picture:picture,
          badge:typeof badge === 'string' ? badge : JSON.stringify(badge),
        })

        res.status(201).json(['réussi']);

    } else {
      res.status(405).end(); // Méthode non autorisée (Method Not Allowed) pour les requêtes autres que POST
    }
  } catch (error) {
    // Gérez les erreurs ici
    res.status(500).json({ error: `Erreur serveur: ${error.message}` });
  }
}