const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Tasks API',
            version: '1.0.0',
            description: 'API for managing Tasks',
            contact: {
                name: 'Nataly Morales'
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Local server'
                }
            ]
        }
    },
    apis: ['./app/routes/*js']
};

const specs = swaggerJsdoc(options);
module.exports = specs;