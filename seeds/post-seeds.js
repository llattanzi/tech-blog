const { Post } = require('../models');

const postData = [
    {
        title: 'Subsea internet cables could detect earthquakes',
        content: 'Optical-fibre cables could spot tsunamis or the effect of climate change on currents researchers say.',
        user_id: 1

    },
    {
        title: 'The sci-fi tech tackling malarial mosquitos',
        content: 'Gene drive development makes a gentically modified gene that spreads widely within populations',
        user_id: 2
    },
    {
        title: 'Could contact lenses become your computer screen?',
        content: "Firms are developing smart contact lenses that can project data infront of the user's eye",
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;