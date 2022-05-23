const { Comment } = require('../models');

const commentData = [{
        comment_text: "Love it!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Good stuff.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Very interesting.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;