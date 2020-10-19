import express from 'express';
import path from 'path';
import cors from 'cors';
import * as dotenv from 'dotenv';
import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

dotenv.config({ path: __dirname + '/.env' });

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.join(__dirname, '..', 'tmp', 'uploads')));

app.use(errorHandler);


app.listen(process.env.APP_PORT, () => console.log(`=> Servidor ouvindo na porta ${process.env.APP_PORT}`));