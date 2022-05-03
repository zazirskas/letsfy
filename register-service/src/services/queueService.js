const { amqp } = require('../config/queue');

class QueueService {
  static send(queue, message) {
    amqp
      .then(function (conn) {
        return conn.createChannel();
      })
      .then(function (ch) {
        return ch.assertQueue(queue).then(function (ok) {
          return ch.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
        });
      })
      .catch(console.warn);
  }
}

module.exports = QueueService;
