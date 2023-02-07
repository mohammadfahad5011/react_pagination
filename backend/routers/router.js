const express = require("express");

const {
  getAllUser,
  createUser,
  deleteUser,
} = require("../controller/controller");

const router = express();
router.get("/", getAllUser);
router.post("/create", createUser);
router.post("/:id", deleteUser);

module.exports = router;
