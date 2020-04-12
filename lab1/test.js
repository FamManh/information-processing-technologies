const { Pool, Client } = require("pg");

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "IPT1",
    password: "21091997",
    port: 5432
});
client.connect();

const queryText =
    "INSERT INTO supplier(SID, SName, SCity, Address, Risk) VALUES($1, $2, $3, $4, $5) RETURNING *";
const values = ["1179", "ООО \"ИРБИС-ВЕНТ\"", "Новгород", "Чистопольская 37", "2"];
// client.query("SELECT Now()", (err, res) => {
//     console.log(res.rows[0]);
//     client.end();
// });

client
    .query(queryText, values)
    .then(res => console.log(res))
    .catch(e => console.error(e.stack));

