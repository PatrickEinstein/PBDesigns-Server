import amqp from "amqplib";

export class RabbitMQService {
  async Connect() {
    let conn = null;
    let channel = null
    try {
      conn = await amqp.connect(
        "amqps://lzbwavrk:k6W113v7nOpbMp4U5IBNDypamhvrJ9hg@leopard.lmq.cloudamqp.com/lzbwavrk"
      );

    channel = await conn.createChannel();
      console.log("RabbitMQ connected and channel created successfully");

      return { conn, channel };
      
    } catch (e) {
      console.error("Error connecting to RabbitMQ:", e);
      return { conn, channel };
    }
  }
}
