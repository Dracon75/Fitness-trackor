const router = require("express").Router();

const pages = require("./pages");
const apiRoutes = require("./apiRoutes");

router.use("/", pages);
router.use("/api", apiRoutes);

module.exports = router;
