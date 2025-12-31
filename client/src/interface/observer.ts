interface ISubject {
  atach(Observer: IObserver): void;
  detach(Observer: IObserver): void;
  notify(): void
}

interface IObserver {
  update(Subject: ISubject): void;
}

export type { ISubject, IObserver }
