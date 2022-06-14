const connectedKnex = require('./knex-connector')

// all orm CRUD
// orm + native-sql
// orm + sp

function getAllReports() {
    return connectedKnex('reports').select('*');
}

function getReportsByid(id) {
    return connectedKnex('reports').select('*').where('id', id).first();
}

function getRaw(query) {
    // run native sql query
    return connectedKnex.raw(query);
}

function addReport(report) {
    return connectedKnex('reports').insert(report);
}

function updateReport(report, id) {
    return connectedKnex('reports').where('id', id).update(report);
}

function deleteReport(id) {
    return connectedKnex('reports').where('id', id).del();
}

module.exports = {
    getAllReports,
    getReportsByid,
    getRaw,
    addReport,
    updateReport,
    deleteReport
}