import type { ISubstances, Substance } from "./interface/substances";

class Substances implements ISubstances {
  substance: Substance = {
    id: 0,
    name: "",
    description: "",
    quantity: 0,
  };

  constructor(name: string, desc: string) {
    this.substance.id = 0;
    this.substance.name = name || "Unammed";
    this.substance.description = desc || "No Description";
    this.substance.quantity = 0;
  }

  getQuantity(): number {
    return this.substance.quantity;
  };

  incrementQuantity(amount: number): void {
    this.substance.quantity += amount;
  }

  decrementQuantity(amount: number): void {
    this.substance.quantity -= amount;
    if (this.substance.quantity < 0) this.substance.quantity = 0;
  }
}

export default { Substances };
