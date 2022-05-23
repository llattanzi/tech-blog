const { Comment } = require('../models');

const commentData = [{
        comment_text: "Love it!",
        userId: 1,
        postId: 1
    },
    {
        comment_text: "Good stuff.",
        userId: 2,
        postId: 2
    },
    {
        comment_text: "Very interesting.",
        userId: 3,
        postId: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;