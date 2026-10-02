import express, {Application, Request, Response} from "express" ;
import carRoutes from './routes/cars'


//import { authenticateKey } from "./middleware/auth.middleware";
import { logRequest } from "./middleware/logging.middleware";
import { swaggerSpec } from "./config/swagger";
import swaggerUi from 'swagger-ui-express';



export const app: Application = express();

app.use(express.json());

app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerSpec)
);


// Middleware to authenticate API key

//app.use(authenticateKey);

app.get("/ping", async (_req : Request, res: Response) => {
    res.json({
    message: "hello from Una dfdsfa",
    });
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


