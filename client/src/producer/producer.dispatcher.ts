import { AppDispatcher } from "../utils/dispatcher";
import { ProducerModel } from "./producer.model";
import { ProducerView } from "./producer.view";

class ProducerProducto extends ProducerModel {
  produce(): void {
    //console.log(this.producer.quantity)
    this.producer.quantity++;
  }
}

const producerProducto = new ProducerProducto({
  id: "P_0000",
  name: "producto",
  description: "Un producto abstracto para probar la libreria",
  quantity: 0
})

const producerView = new ProducerView(producerProducto);

AppDispatcher.register(payload => {
  if (payload.action === 'produce') {
    //console.log("produce executes")
    producerProducto.produce();
  }

  producerView.render();
})

export { producerView }
