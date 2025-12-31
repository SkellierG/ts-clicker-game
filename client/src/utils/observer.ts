import type { IObserver, ISubject } from "../interface/observer";

class Subject implements ISubject {
  _observers: IObserver[] = [];

  atach(Observer: IObserver): void {
    const exists = this._observers.includes(Observer);

    if (exists) return;

    this._observers.push(Observer);
  }

  detach(Observer: IObserver): void {
    const observerIndex = this._observers.indexOf(Observer);

    if (observerIndex === -1) return;

    this._observers.splice(observerIndex, 1);
  }

  notify(): void {
    for (const observer of this._observers) {
      observer.update(this);
    }
  }

}

export default Subject;
