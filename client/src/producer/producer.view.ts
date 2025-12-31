import type { IView } from "../interface/view";
import type { IProducerModel } from "../interface/producer";
import { $ } from "../utils/helpers";


class ProducerButton implements IView {
  model: IProducerModel;

  constructor(model: IProducerModel) {
    this.model = model;
  }

  render(HTMLreference: string): void {
    const container = $(HTMLreference) as HTMLElement;

    //console.log("Producer View:", this.model.producer.quantity)

    const content = `
    <div class="producer-button-element">
      <p>${this.model.producer.name}</p>
      <p>${this.model.producer.description}</p>
      <span class="producer-span">${this.model.producer.quantity}</span>
      <br>
      <button onClick="window.AppDispatcher.dispatch({ action: 'produce-${this.model.producer.name.toLowerCase()}' })">CLICK ME</button>
    </div>
    `;

    container.innerHTML = content;
  }
}

class ProducerPasive implements IView {
  model: IProducerModel;

  constructor(model: IProducerModel) {
    this.model = model;
  }

  render(HTMLreference: string): void {
    const container = $(HTMLreference) as HTMLElement;

    const content = `
    <div class="producer-pasive-element">
      <p>${this.model.producer.name}</p>
      <p>${this.model.producer.description}</p>
      <span>${this.model.producer.quantity}</span>
      <button onclick="window.AppDispatcher.dispatch({ action: 'produce-${this.model.producer.name.toLowerCase()}' })">Start</button>
    </div>
    `;

    container.innerHTML = content;
  }
}

export { ProducerButton, ProducerPasive };
