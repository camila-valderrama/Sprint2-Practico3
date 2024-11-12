import express from 'express';
import { connectDB } from './src/config/dbConfig.mjs';
import superHeroRoutes from './src/routes/superHeroRoutes.mjs';
import router from './src/routes/superHeroRoutes.mjs';

const app = express();
const PORT = 3500;

//Middleware para parsear JSON
app.use(express.json());

//Conexión a MongoDB
connectDB();

//Configuración de rutas
app.use('/api', router);

//Manejo de errores para rutas no encontradas
app.use((req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontrada" });
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});