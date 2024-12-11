const express = require("express");
const app = express();
const port = 3000;

// Ruta para obtener la fecha en UTC -4
app.get("/fecha", (req, res) => {
  const now = new Date();

  // Convertir a UTC -4
  const offset = -4; // UTC -4
  now.setHours(now.getHours() + offset);

  // Obtener la fecha en formato YYYYMMDD
  const date = now.toISOString().slice(0, 10).replace(/-/g, "");

  // Responder con la fecha en formato JSON
  res.json({ date });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
