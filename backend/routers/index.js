const express = require("express");

const productRouter = require("./product");
const router = new express.Router();


router.use("/api/product", productRouter);

module.exports = router;
