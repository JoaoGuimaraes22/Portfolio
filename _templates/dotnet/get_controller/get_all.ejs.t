---
to: ./backend/node/psql_io/controllers/<%=name%>.js
---

const query = require("../db/query");

const getAll = async (req, res) => {
  console.log("Getting <something> from <%=table%>...");
  const findAllQuery = "SELECT * FROM <%=table%> where <condition>";
  try {
    const { rows, rowCount } = await query(findAllQuery, [req.<condition>]);
    return res.status(200).send({ rows, rowCount });
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = getAll;