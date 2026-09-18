const projectSeed = [
    {
        name: 'Site vitrine Hallay',
        image: 'img.jpg',
        statue: 'ended',
        client: 'Atelier Miroir',
        desc: 'Un site vitrine clair et chaleureux pour presenter le savoir-faire de l atelier.',
        dev: 'Elliot',
        communication: 'Clara',
        designer: 'Maya',
    },
    {
        name: 'Application de suivi',
        image: 'img1.jpg',
        statue: 'in_progress',
        client: 'Maison Lumen',
        desc: 'Une interface simple pour suivre les commandes et les priorites de l equipe.',
        dev: 'Elliot',
        communication: 'Noa',
        designer: 'Maya',
    },
    {
        name: 'Identite visuelle',
        image: 'img2.jpg',
        statue: 'waiting',
        client: 'Cafe des Arts',
        desc: 'Une nouvelle identite visuelle a decliner sur les supports du cafe.',
        dev: 'Elliot',
        communication: 'Clara',
        designer: 'Noa',
    },
];

const teamSeed = [
    { name: 'Elliot', picture: 'img3', badge: ['Developpeur', 'Frontend'] },
    { name: 'Clara', picture: 'img4', badge: ['Communication', 'Strategie'] },
    { name: 'Maya', picture: 'img5', badge: ['Designer', 'Direction artistique'] },
];

async function seedDatabase(sequelize) {
    const { projet: Projet, team: Team } = sequelize.models;

    if (await Projet.count() === 0) {
        await Projet.bulkCreate(projectSeed);
    }

    if (await Team.count() === 0) {
        await Team.bulkCreate(teamSeed.map((member) => ({
            ...member,
            badge: JSON.stringify(member.badge),
        })));
    }
}

module.exports = { seedDatabase };