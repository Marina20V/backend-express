import express from "express";
import db from "./config/database.js";
import eventRoutes from "./routes/index.js";
import categoryRoutes from "./routes/category.js";
import cors from "cors";

import path from "path"
const __dirname = path.resolve();



const app = express();


try {
  await db.authenticate();
   console.log('Database connected...');
} catch (error) {
   console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/events', eventRoutes);
app.use('/categories', categoryRoutes);
app.use('/uploads', express.static('public/uploads'));

app.listen(5000, () => console.log('Server running at port 5000'));
