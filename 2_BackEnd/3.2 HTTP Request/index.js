import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>All about me</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h2>I'm Mrityunjoy Mondal</h2>");
});

app.get("/contact", (req, res) => {
    res.send("<p>gamil: mrityunjoyop123@gmail.com</p>");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});