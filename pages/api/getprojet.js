import sequelize from '../../module/sequelize'

export default async function handler(_req, res) {
    try {
        await sequelize.initializeDatabase()
        const projects = await sequelize.models.projet.findAll({ raw: true })
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// export default async function handler(req, res) {
//   try {
//     if (req.method === 'POST') {
//       const { message } = req.body; // Accédez au message envoyé depuis le corps de la requête

//       let sql = `SELECT * FROM projet`; // Utilisez le message dans votre requête SQL

//       const projects = await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT,});

//       res.json([projects,message]); // Renvoyez les projets en tant que réponse
//     } else {
//       res.status(405).end(); // Méthode non autorisée (Method Not Allowed) pour les requêtes autres que POST
//     }
//   } catch (error) {
//     // Gérez les erreurs ici
//     res.status(500).json({ error: `Erreur serveur: ${error.message}` });
//   }
// }