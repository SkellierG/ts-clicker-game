import type IDispatcher from "../interface/dispatcher";

class DispatcherSingleton implements IDispatcher {

  _callbacks: Record<number, (payload: Record<string, any>) => void>;
  _isHandled: Record<number, boolean>;
  _pendingPayload: Record<string, any>;
  _isPending: Record<number, boolean>;
  _lastId: number

  isDispatching: boolean;

  static _instance: DispatcherSingleton;

  constructor() {
    this._callbacks = {};
    this._isPending = {};
    this._isHandled = {};
    this._pendingPayload = {};
    this._lastId = 0;
    this.isDispatching = false;
  }

  static get instance(): DispatcherSingleton {
    if (!DispatcherSingleton._instance) {
      DispatcherSingleton._instance = new DispatcherSingleton();
    }
    return DispatcherSingleton._instance;
  }

  _invokeCallback(id: number): void {
    this._isPending[id] = true;
    this._callbacks[id](this._pendingPayload);
    this._isHandled[id] = true;
  }

  _startDispatching(payload: Record<string, any>): void {
    for (let id in this._callbacks) {
      this._isPending[id] = false;
      this._isHandled[id] = false;
    }

    this._pendingPayload = payload;

    this.isDispatching = true;
  }

  _stopDispatching(): void {
    this._pendingPayload = {};
    this.isDispatching = false;
  }

  register(callback: (payload: Record<string, any>) => void): number {
    this._callbacks[this._lastId++] = callback;
    return this._lastId;
  }

  unregister(id: number): void {
    delete this._callbacks[id];
  }

  waitFor(ids: number[]): void {

    if (!this.isDispatching) throw new Error("Dispatch.waitfor(): Most be invoked while is Dispatching");

    for (let id of ids) {

      if (this._isPending[id]) {
        if (!this._isHandled[id]) throw new Error("Dispatch.waitFor(): Circular dependency detected while waiting for ${id}");
        continue;
      }

      if (!this._callbacks[id]) throw new Error("Dispathc.waitfor(): Callback with id ${id} doesn't exist");
      this._invokeCallback(id);
    }

  }

  dispatch(payload: Record<string, any>): void {
    if (this.isDispatching) throw new Error("Dispatch.dispatch(): Cannot dispatch while already dispatching");

    this._startDispatching(payload);

    for (let id in this._callbacks) {
      if (this._isPending[id]) continue;
      this._invokeCallback(id as unknown as number);
    }

    this._stopDispatching();
  }

}

const AppDispatcher = DispatcherSingleton.instance;

(window as any).AppDispatcher = AppDispatcher;

export { AppDispatcher };
