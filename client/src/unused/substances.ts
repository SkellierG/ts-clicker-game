type Substance = {
  id: number,
  name: string,
  description: string
  quantity: number
}

interface ISubstances {
  substance: Substance,

  getQuantity(): number,
  incrementQuantity(amount: number): void,
  decrementQuantity(amount: number): void,
}

interface ISubstancesCollection {
  substances: ISubstances[],

  getSubstanceById(id: number): ISubstances | undefined,
  addSubstance(substance: ISubstances): void,
  getSubstanceByName(name: string): ISubstances | undefined,
}

type Ingredient = {
  substanceId: number,
  quantity: number,
}

interface IRecipes {
  in: Ingredient[],
  out: Ingredient[],

  _substanceCollection: ISubstancesCollection,

  haveMaterials(): boolean,
  canCraft(times: number): boolean,
  craft(times: number): boolean,
}

interface IProduction {
  produced: Ingredient[];

  produce(): void;
}

export type {
  Substance,
  ISubstances,
  ISubstancesCollection,
  Ingredient,
  IRecipes,
  IProduction,
}
