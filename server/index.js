import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from'morgan';
import kpiRoutes from './routes/kpi.js'
import productRoutes from './routes/product.js';
import transactionRoutes from './routes/transaction.js';
import Product from './models/Product.js';
import KPI from './models/KPI.js';
import Transaction from './models/Transaction.js';
import { kpis, products, transactions } from './data/data.js'

/* Configuration  */
dotenv.config();

const app = express();

/* Middlewares */
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes */
app.use('/kpi', kpiRoutes);
app.use('/product', productRoutes);
app.use('/transaction', transactionRoutes);

console.log('hello from server')

/* MONGOOSE CONNECTION */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    // before seeding db with info, drop current db,
    // run it once and seed again
    // do not do this in production databases
    /* ADD DATA 1 TIME ONLY AS NEEDED */
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((err) => console.log(`${err} did not connect`));