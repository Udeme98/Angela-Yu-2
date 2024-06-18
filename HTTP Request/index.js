import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("<h2>Hello</h2>");
});

app.get("/about", (req, res) => {
  res.send("<h2>About Me</h2><p>My name is Udeme</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>Contact Me</h2><p>Email: Darealudeme1@gmail.com</p>");
});

app.listen(port, () => {
  console.log(`Server was created at ${port}`);
});
