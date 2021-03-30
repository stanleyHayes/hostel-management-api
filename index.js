import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: "./config/config.env"});
import hostelRoutes from "./routes/hostels.js";

mongoose.connect(process.env.MONGODB_URI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.log(`Error: ${error.message}`);
});

const app = express();

const PORT = process.env.PORT || 8000;
const HOSTNAME = 'localhost';

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

app.use('/api/v1/hostels', hostelRoutes);

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server connected in ${process.env.NODE_ENV} mode on port ${PORT}`);
})