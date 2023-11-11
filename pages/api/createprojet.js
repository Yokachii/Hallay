import { NextApiRequest, NextApiResponse } from 'next'
import Projet from '../../module/model/projet'
import Team from '../../module/model/team'
import sequelize from '../../module/sequelize'
import { Sequelize } from 'sequelize'
import { sql } from '@sequelize/core';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
        // const { statue,image,name,client,desc,dev,communication,designer, } = req.body; // Accédez au message envoyé depuis le corps de la requête
        const {name,picture,badge} = req.body

        // await Projet.create({
        //     name:name,
        //     image:image,
        //     statue:statue,
        //     client:client,
        //     desc:desc,
        //     dev:dev,
        //     communication:communication,
        //     designer:designer,
        // })
        await Team.create({
          name:name,
          picture:picture,
          badge:badge,
        })

        res.json(['réussi']);

    } else {
      res.status(405).end(); // Méthode non autorisée (Method Not Allowed) pour les requêtes autres que POST
    }
  } catch (error) {
    // Gérez les erreurs ici
    res.status(500).json({ error: `Erreur serveur: ${error.message}` });
  }
}