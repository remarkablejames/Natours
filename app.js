import express from 'express';
import morgan from 'morgan';
const app = express();
import dotenv from "dotenv";

// LOAD ENV VARIABLES
dotenv.config();

// ROUTERS
import tourRouter from './routes/tourRoutes.js';
import userRouter from './routes/userRoutes.js';

// MIDLLEWARES
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
console.log("========",process.env.NODE_ENV);
app.use(express.json());

// ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);


export default app;