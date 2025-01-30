const express = require("express");
const https = require("https");
const fs = require("fs");
//const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const authRoutes = require("./routes/auth"); // Rutas de autenticación
const privateRoutes = require("./routes/private"); // Rutas protegidas

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware de seguridad
app.use(helmet());
app.use(cors());
app.use(express.json()); // Para leer JSON en requests

// Conectar a MongoDB
/*mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ Conectado a MongoDB"))
    .catch((err) => console.error("❌ Error de conexión:", err));
*/

// Usar las rutas de autenticación
app.use("/auth", authRoutes);

// Usar las rutas protegidas
app.use("/private", privateRoutes);

// Levantar servidor HTTPS
const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.crt"),
};

https.createServer(options, app).listen(443, () => {
    console.log("🔒 Servidor HTTPS corriendo en el puerto 443");
});
