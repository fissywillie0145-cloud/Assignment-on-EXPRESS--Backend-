const express = require('express');
const app = express();

const PORT = 3009;
app.get("/", (req, res) => {
  res.send("Welcome! Aboard dearies");
});

app.get("/about", (req, res) => {
  res.send("Welcome to my about page ,thanks for coming in here!");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to my contact page feel free to contact us if any issue!");
});

app.get("/services", (req, res) => {
  res.send(
    "Welcome to my services page it`s okie to explore the services available",
  );
});

app.listen(PORT, () => {
  console.log(`if your done getout on http://localhost:${PORT}`);
});
