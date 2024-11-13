import express from "express";

const app = express();

const port = process.env.PORT || 8083

app.get("/", (req, res) => {
    res.status(200).json({
        success : true,
        data : "hello world test"
    })
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});