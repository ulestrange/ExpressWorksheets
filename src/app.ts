import express, {Application, Request, Response} from "express" ;
import carRoutes from './routes/cars'
import {env} from './config/env';

const port = env.port

const app: Application = express();

app.use(express.json());

app.use((req, _res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

app.get("/ping", async (_req : Request, res: Response) => {
    res.json({
    message: "hello from Una dfdsfa",
    });
});

app.get('/bananas', async (_req : Request, res: Response) => {
    res.json({
    message: "this is bananas",
    });
});

app.use('/api/v1/cars', carRoutes);


app.listen(port, () => {
    console.log("Server is running on port", port);
    });

