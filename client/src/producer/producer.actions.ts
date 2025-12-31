import { AppDispatcher } from "../utils/dispatcher";
import type { ProducerModel } from "./producer.model";

enum ProducerActions {
  PRODUCE_INCREMENT = 'ProduceIncrement',
  PRODUCE_PASIVE = 'PasiveProduce'
}

export const produceIncrement = (producer: ProducerModel) => {
  AppDispatcher.dispatch({
    action: ProducerActions.PRODUCE_INCREMENT,
    producer: producer,
  })
}

export const producePasive = (producer: ProducerModel) => {
  AppDispatcher.dispatch({
    action: ProducerActions.PRODUCE_PASIVE,
    producer_id: producer.producer.id,
  })
}
