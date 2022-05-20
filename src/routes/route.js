const express = require("express");
const { urlShorten, redirect } = require("../controller/urlController");
const router = express.Router();

router.post("/url/shorten", urlShorten);
router.get("/:urlCode",redirect)

module.exports = router