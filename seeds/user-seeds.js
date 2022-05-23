const { User } = require('../models');

const userData = [
    {
        username: 'Lauren',
        password: 'password'

    },
    {
        username: 'John',
        password: 'password1'
    },
    {
        username: 'Sara',
        password: 'password2'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;