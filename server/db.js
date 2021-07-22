const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'JJ',
	password: 202103001,
	host: 'localhost',
	port: 5432,
	database: 'pern',
});

module.exports = pool;
