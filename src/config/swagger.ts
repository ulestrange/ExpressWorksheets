import swaggerJSDoc from 'swagger-jsdoc';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { createCarZSchema } from '../models/cars';

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Car API',
            version: '1.0.0',
            description: 'REST API for managing cars'
        },
        components: {
      schemas: {
        // Convert Zod schema to OpenAPI-compatible JSON schema
        CreateCarInput: zodToJsonSchema(createCarZSchema, { target: 'openApi3' }),
      },
    },
        servers: [
            {
                url: "/api/v1",
            },
        ],
    },
    apis: ['./src/controllers/*.ts']
};

export const swaggerSpec = swaggerJSDoc(options);
