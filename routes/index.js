const path = require("path");
var express = require('express');
var router = express.Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
