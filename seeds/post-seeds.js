const { Post } = require('../models');

const postData = [
    {
        title: 'Tech Blog Post 1',
        post_content: 'This is the first post of the Tech Blog.',
        user_id: 1
    },
    {
        title: 'Tech Blog Post 2',
        post_content: 'This is the second post of the Tech Blog.',
        user_id: 2
    },
    {
        title: 'Tech Blog Post 3',
        post_content: 'This is the third post of the Tech Blog.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;