const express = require("express");
const router = express.Router();
const memberController = require ("./controllers/memberController");



//Memberlarga daxldor routerlar
router.get("/", memberController.home);
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);

  //Boshqalarga daxldor routerlar

  router.get(
    "/menu", (req, res) => {
        res.send ("menu sahifasudasiz");
    }
  );

  router.get(
    "/community", (req, res) => {
        res.send ("jamiyat sahifasudasiz");
    }
  );




  module.exports = router;