const cors = require ('cors');
import express, { Request, Response } from 'express';
const helmet = require ('helmet');
const morgan = require ('morgan');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const propertyRoutes = require('./routes/property.routes');

import type MessageResponse from "./interfaces/message-response.js";

import api from "./api/index.js";
import * as middlewares from "./middlewares.js";

dotenv.config();
connectDB()
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response<MessageResponse>) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", api);
app.use('/api/properties', propertyRoutes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on
  port: ${PORT}`));
export default app;
