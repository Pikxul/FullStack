import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    const today = new Date();
    const day = today.getDate();

    let type = "weekdays";
    let adv = "its time to work hard";

    if (day === 0 || day ===6) {
        type = "weekends";
        adv = "its time to have fun";
    }

    res.render("index.ejs",{
        dateType: type,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});