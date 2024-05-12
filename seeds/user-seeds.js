const { User } = require('../models');

const userData = [
    {
        username: "stevie_b",
        twitter: "stevie_b",
        github: "stevie_b",
        email: "steve_b@gmail.com",
        password: "password1234"
    },
    {
        username: "jimmy_h",
        twitter: "jimmy_h",
        github: "jimmy_h",
        email: "jimmy_h@gmail.com",
        password: "password7890"
    },
    {
        username: "mick_j",
        twitter: "mick_j",
        github: "mick_j",
        email: "mick_j@gmail.com",
        password: "password5678"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;