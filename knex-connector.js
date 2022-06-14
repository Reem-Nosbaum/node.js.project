const knex = require('knex')
const config = require('config')
const db_conn = config.get('db_conn')

const connectedKnex = knex({
    client: db_conn.client,
    version: db_conn.version,
    connection: {
        filename: db_conn.filename

    }
})

module.exports = connectedKnex;
