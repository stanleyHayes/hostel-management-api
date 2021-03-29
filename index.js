import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config({path: "./config/config.env"});
const app = express();

const PORT = process.env.PORT || 8000;
const HOSTNAME = 'localhost';

app.use(cors());
app.use(helmet());
app.use(morgan.format("tiny"));
app.use(express.json());




app.listen(PORT, HOSTNAME, () => {
    console.log(`Server connected in ${process.env.NODE_ENV} mode on port ${PORT}`);
})