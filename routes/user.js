// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// "경로 설정" = 라우팅
// 기본 경로: localhost:PORT/

router.get("/", controller.main);

router.get("/signup", controller.getSignup);
router.post("/signup", controller.postSignup);

router.get("/signin", controller.getSignin);
router.post("/signin", controller.postSignin);

// POST / => localhost:PORT/user/profile
router.post("/profile", controller.postProfile);
// POST / => localhost:PORT/user/profile/edit
router.post("/profile/edit", controller.editProfile);
// POST / => localhost:PORT/user/profile/delete
router.post("/profile/delete", controller.deleteProfile);

module.exports = router;
