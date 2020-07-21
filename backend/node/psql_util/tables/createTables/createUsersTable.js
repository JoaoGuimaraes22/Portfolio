

const pool = require("../../db/pool");

const createUsersTable = () => {
  console.log("Creating Users Table...");
  const queryText = `CREATE TABLE IF NOT EXISTS
      Users(
          // Table Collumns
      )`;

  pool
    .query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

module.exports = createUsersTable;