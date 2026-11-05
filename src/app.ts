import express, {Application, Request, Response} from "express" ;
import carRoutes from './routes/cars'
import cors from 'cors';


//import { authenticateKey } from "./middleware/auth.middleware";
import { logRequest } from "./middleware/logging.middleware";
import { swaggerSpec } from "./config/swagger";
import swaggerUi from 'swagger-ui-express';
import { errorHandler } from "./middleware/errors.middleware";



export const app: Application = express();

app.use(express.json());
app.use(cors())

app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerSpec)
);


// Middleware to authenticate API key

//app.use(authenticateKey);

// Special code to add a delay - remove later

app.use((_req, _res, next) => setTimeout(next, 2000));


app.get("/ping", async (_req : Request, res: Response) => {
    console.log("Received request to /ping");
    res.json({
    message: "hello from Una",
    });
});

app.get("/pong", (_req : Request, _res: Response) => {
    console.log("Received request to /pong");
    throw new Error("Simulated error in /pong route");
});

app.get("/pung", async (_req : Request, _res: Response) => {
    console.log("Received request to /pung");
     throw new Error("Simulated error in /pung route");
});

app.get('/bananas', logRequest, async (_req : Request, res: Response) => {
    res.json({
    message: "this is bananas",
    });
});

app.use('/api/v1/cars',  carRoutes);

app.get('/api-docs.json', (_req, res) => {
res.json(swaggerSpec);
});

app.use(errorHandler)
