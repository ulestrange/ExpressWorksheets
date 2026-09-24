import express, {Application, Request, Response} from "express" ;
import carRoutes from './routes/cars'
import {env} from './config/env';
import { connectDB } from "./config/database";
import { authenticateKey } from "./middleware/auth.middleware";

const port = env.port

const app: Application = express();

app.use(express.json());

// Middleware to log incoming requests

app.use((req, _res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

// Middleware to authenticate API key

//app.use(authenticateKey);

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

app.use('/api/v1/cars', authenticateKey, carRoutes);


const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

};

startServer();