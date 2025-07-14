const express = require('express');
const app = express();

// Middleware para leer JSON
app.use(express.json());

// Ruta que recibirá los mensajes de WhatsAuto
app.post('/webhook', (req, res) => {
  const { message, sender } = req.body; // Datos que envía WhatsAuto
  console.log("Mensaje recibido:", message, "de:", sender);

  // Respuesta automática (opcional)
  res.json({ status: "success", reply: "¡Mensaje recibido!" });
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`));