const { comment } = require('../models');

const commentData = [
    {
        comment_text: "This is the first comment on the first post.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "This is the second comment on the first post.",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "This is the first comment on the second post.",
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: "This is the second comment on the second post.",
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: "This is the first comment on the third post.",
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: "This is the second comment on the third post.",
        user_id: 3,
        post_id: 3
    },
];

const seedComments = () => comment.bulkCreate(commentData);

module.exports = seedComments;