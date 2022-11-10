// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost", // ip주소
  user: "user", // mysql접속할때 root로 들어가면 오류남 -> 새로운 계정으로 접속해야함
  password: "1234", // DB접속 비밀번호
  database: "kdt", // DB이름
});

exports.postSignup = (data, callback) => {
  conn.query(
    `INSERT INTO user (userid, name, pw) VALUES('${data.userid}', '${data.name}', '${data.pw}')`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log("postSignup", rows); // [{},{},{},{}]
      callback(rows.insertId);
    }
  );
};

exports.postSignin = (data, callback) => {
  conn.query(
    `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' LIMIT 1`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log("postSignin", rows); // [{},{},{},{}]

      callback(rows[0]);
    }
  );
};

exports.postProfile = (userid, callback) => {
  conn.query(
    `SELECT * FROM user WHERE userid='${userid}' LIMIT 1`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log("postProfile", rows); // [{},{},{},{}]
      callback(rows[0]);
    }
  );
};

exports.editProfile = (data, callback) => {
  conn.query(
    `UPDATE user SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log("editId", rows); // [{},{},{},{}]
      callback(true);
    }
  );
};

exports.deleteProfile = (id, callback) => {
  conn.query(`DELETE FROM user WHERE id='${id}'`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("deleteId", rows); // [{},{},{},{}]
    callback(true);
  });
};
