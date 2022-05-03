const { amqp } = require('../config/queue');

class NotifierService {
  static send(message) {
    amqp
      .then(function (conn) {
        return conn.createChannel();
      })
      .then(function (ch) {
        return ch
          .assertQueue(process.env.NOTIFICATION_QUEUE)
          .then(function (ok) {
            return ch.sendToQueue(
              process.env.NOTIFICATION_QUEUE,
              Buffer.from(JSON.stringify(message))
            );
          });
      })
      .catch(console.warn);
  }
}

module.exports = NotifierService;
