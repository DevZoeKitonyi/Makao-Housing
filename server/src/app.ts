const cors = require ('cors');
import express, { Request, Response } from 'express';
const helmet = require ('helmet');
const morgan = require ('morgan');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const propertyRoutes = require('./routes/property.routes');
const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes.js');
const supportRoutes = require('./routes/support.routes.js');

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
app.use('./api/auth', authRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/admin', adminRoutes);
app.use('./api/support', supportRoutes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
app.use(checkUnreadNotifications);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on
  port: ${PORT}`));
export default app;
