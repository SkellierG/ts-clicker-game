import type { IProducerModel, Producer } from "../interface/producer"

abstract class ProducerModel implements IProducerModel {

  producer: Producer = {
    id: "P_0",
    name: "No Name",
    description: "No Description",
    quantity: 0,
  };

  constructor(producer: Producer) {
    this.producer.id = producer.id;
    this.producer.name = producer.name;
    this.producer.description = producer.description;
    this.producer.quantity = producer.quantity
  }

  abstract produce(): void;
}

export { ProducerModel };
