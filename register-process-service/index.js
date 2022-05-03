require('dotenv').config();
const ValidationHandler = require('./src/handlers/validationHandler');

const amqp = require('amqplib').connect(process.env.RABBITMQ_URL);

amqp
  .then(function (conn) {
    return conn.createChannel();
  })
  .then(function (ch) {
    return ch.assertQueue(process.env.CONSUMER_QUEUE).then(function (ok) {
      return ch.consume(process.env.CONSUMER_QUEUE, async function (msg) {
        if (msg !== null) {
          ValidationHandler.validate(JSON.parse(msg.content));
          ch.ack(msg);
        }
      });
    });
  })
  .catch(console.warn);
