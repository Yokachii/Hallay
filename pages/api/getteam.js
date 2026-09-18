import sequelize from '../../module/sequelize'

export default async function handler(_req, res) {
    try {
        await sequelize.initializeDatabase()
        const team = await sequelize.models.team.findAll({ raw: true })
        res.status(200).json(team)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}