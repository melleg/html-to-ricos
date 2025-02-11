import express from "express";
import { convertHtmlToRicosJson } from "./converter.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello! Post the HTML to this endpoint to get the ricos");
});

app.post("/", (req, res) => {
  const html = req.body;
  const ricos = convertHtmlToRicosJson(html);
  res.type("json");
  res.send(ricos);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on http://localhost:3000");
});
