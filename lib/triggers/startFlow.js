const processWrapper = require('../services/process-wrapper');

module.exports.process = processWrapper(processTrigger);

function processTrigger(msg, cfg, snapshot) {
    this.emitData({
        now: new Date().toISOString(),
        config: cfg,
        snapshot: snapshot,
    });
}