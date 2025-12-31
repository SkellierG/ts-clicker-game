import { AppDispatcher } from "../utils/dispatcher";
import { ProducerModel } from "./producer.model";
import { ProducerButton, ProducerPasive } from "./producer.view";

class ProducerIncrementOne extends ProducerModel {
  produce(): void {
    //console.log(this.producer.quantity)
    this.producer.quantity++;
  }
}

class ProducerIncrementPasive extends ProducerModel {
  _isProducing: boolean = false;

  _pasiveProduce(): void {
    this.producer.quantity++
    setTimeout(() => {
      this._pasiveProduce();
    }, 1000)
  }

  produce(): void {
    if (!this._isProducing) {
      this._isProducing = true;
      this._pasiveProduce();
    }
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

const cultivar = new ProducerIncrementPasive({
  id: "P_2",
  name: "Cultivar",
  description: "Un pequeño cultivo que produce comida pasivamente",
  quantity: 0,
})

const cazarProducerButton = new ProducerButton(cazar);
const talarProducerButton = new ProducerButton(talar);
const cultivarProducerPasive = new ProducerPasive(cultivar);

function pasiveRender(seconds: number) {
  setTimeout(() => {
    cultivarProducerPasive.render('#producer-cultivar');
    pasiveRender(seconds);
  }, seconds);
}

AppDispatcher.register(payload => {
  if (payload.action === 'produce-cazar') {
    //console.log("produce executes")
    cazar.produce();
  }

  if (payload.action === 'produce-talar') {
    talar.produce();
  }

  if (payload.action === 'produce-cultivar') {
    console.log('produce-cultivar')
    cultivar.produce();
    pasiveRender(100)
  }

  cazarProducerButton.render('#producer-cazar');
  talarProducerButton.render('#producer-talar');
})

export { cazarProducerButton, talarProducerButton, cultivarProducerPasive }
