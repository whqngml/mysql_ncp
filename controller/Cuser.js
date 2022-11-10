// TODO: 컨트롤러 코드
const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.postSignup = (req, res) => {
  console.log("postSignin.con", req.body);
  User.postSignup(req.body, (result) => {
    res.send({
      id: result,
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    });
  });
};

exports.getSignin = (req, res) => {
  res.render("signin");
};

exports.postSignin = (req, res) => {
  console.log("postSignin.con", req.body);
  User.postSignin(req.body, (result) => {
    if (result == undefined) {
      return res.send(false);
    } else {
      return res.send(true);
    }
  });
};

exports.postProfile = (req, res) => {
  console.log("postProfile.con", req.body);
  User.postProfile(req.body.userid, (result) => {
    console.log("포스트", result);
    if (result == undefined) {
      return res.redirect("/user/signin");
    }
    res.render("profile", { data: result });
  });
};

exports.editProfile = (req, res) => {
  console.log("editProfile.con", req.body);
  User.editProfile(req.body, () => {
    res.send(req.body);
  });
};

exports.deleteProfile = (req, res) => {
  console.log("deleteProfile.con", req.body);
  User.deleteProfile(req.body.id, () => {
    // res.redirect("/user/signin");
    res.send(req.body);
  });
};
