import { NextApiRequest, NextApiResponse } from 'next'
import sequelize from '../../module/sequelize'
import { Sequelize } from 'sequelize'
import { sql } from '@sequelize/core';

export default async function handler(_req, res) {
    try {

        let sql = `SELECT * FROM projet`

        await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT}).then(x=>{
            res.end(JSON.stringify(x))
        })

    } catch (error) {
        // Handle any errors that occur during the request
        res.end(`err : ${error}`)
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