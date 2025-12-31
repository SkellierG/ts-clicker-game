import { AppDispatcher } from "../utils/dispatcher";
import { ProducerModel } from "./producer.model";
import { ProducerView } from "./producer.view";

class ProducerIncrementOne extends ProducerModel {
  produce(): void {
    //console.log(this.producer.quantity)
    this.producer.quantity++;
  }
}

const cazar = new ProducerIncrementOne({
  id: "P_0",
  name: "Cazar",
  description: "Ir a cazar unos animalillos",
  quantity: 0
})

const talar = new ProducerIncrementOne({
  id: "P_1",
  name: "Talar",
  description: "Ir a talar al bosque por un poco de madera",
  quantity: 0
})

const cazarProducerView = new ProducerView(cazar);
const talarProducerView = new ProducerView(talar);


AppDispatcher.register(payload => {
  if (payload.action === 'produce-cazar') {
    //console.log("produce executes")
    cazar.produce();
  }

  if (payload.action === 'produce-talar') {
    talar.produce();
  }

  cazarProducerView.render('#producer-cazar');
  talarProducerView.render('#producer-talar')
})

export { cazarProducerView, talarProducerView }
