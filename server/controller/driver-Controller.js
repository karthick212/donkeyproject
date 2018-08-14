var dbconfig = require('../config/db');

var driverController = {
    FetchAllDetails(callback) {
        return dbconfig.query("select * from driver", callback);
    },
}

module.exports = driverController;
