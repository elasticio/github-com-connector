const { messages } = require('elasticio-node');
const {inspect} = require('util');

exports.process = async function process(msg, cfg) {
    this.logger.info(`CFG is: ${inspect(cfg)}`);
    await this.emit('data', messages.newMessageWithBody({}));
};
