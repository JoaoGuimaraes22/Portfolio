---
to: ./backend/node/psql_util/tables/createTables/create<%=name%>Table.js
---

const pool = require("../../db/pool");

const create<%=name%>Table = () => {
  console.log("Creating <%=name%> Table...");
  const queryText = `CREATE TABLE IF NOT EXISTS
      <%=name%>(
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

module.exports = create<%=name%>Table;