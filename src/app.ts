import express, { Application, Request, Response } from "express";
import carRoutes from './routes/cars'


//import { authenticateKey } from "./middleware/auth.middleware";
import { logRequest } from "./middleware/logging.middleware";
import { swaggerSpec } from "./config/swagger";
import swaggerUi from 'swagger-ui-express';
import helmet from 'helmet';





export const app: Application = express();

app.use(helmet())

app.use(express.json());


import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // max requests
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(limiter);

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);


// Middleware to authenticate API key

//app.use(authenticateKey);

app.get("/ping", async (_req: Request, res: Response) => {
    console.log("Received request to /ping");
    res.json({
        message: "hello from Una",
    });
});

app.get('/bananas', logRequest, async (_req: Request, res: Response) => {
    res.json({
        message: "this is bananas",
    });
});

app.use('/api/v1/cars', carRoutes);

app.get('/api-docs.json', (_req, res) => {
    res.json(swaggerSpec);
});


