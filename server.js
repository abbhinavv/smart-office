const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

const FILE = path.join(__dirname, "documents", "document.html");

app.post("/save", (req, res) => {
  fs.writeFileSync(FILE, req.body.content);
  res.send({ status: "saved" });
});

app.get("/load", (req, res) => {
  if (fs.existsSync(FILE)) {
    const content = fs.readFileSync(FILE, "utf8");
    res.send({ content });
  } else {
    res.send({ content: "" });
  }
});

app.get("/template", (req, res) => {
  const template = `
    <h2>Official Letter</h2>
    <p><b>Sender:</b> Your Name</p>
    <p><b>Receiver:</b> Receiver Name</p>
    <p><b>Subject:</b> </p>
    <p>Dear Sir/Madam,</p>
    <p>Your text here...</p>
  `;
  res.send({ content: template });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
