const logger = require('../utils/logger');

module.exports = (err, req, res, next) => {
    logger.error(err.stack);

    res.status(err.status || 500).json({
        message: err.message || 'Internal server error'
    });
};