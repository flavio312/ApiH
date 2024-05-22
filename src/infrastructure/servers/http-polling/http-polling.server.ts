import express from 'express';
import { connectDatabase } from '../../database/database.connection';
import httpPollingRoutes from './http-polling.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', httpPollingRoutes);

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor HTTP de polling corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error('Error al conectar con la base de datos:', error));
