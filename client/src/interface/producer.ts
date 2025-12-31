type Producer = {
  id: string,
  name: string,
  description: string,
  quantity: number,
}

interface IProducerModel {
  producer: Producer;

  produce(): void;
}

export type { Producer, IProducerModel }
