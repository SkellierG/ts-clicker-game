export default interface IDispatcher {

  isDispatching: boolean;

  /***
   * Registers a callback to be invoked when an action is dispatched
   * @param callback The callback function to register
   * @returns A unique identifier for the registered callback, can be used in Waitfor method
   */
  register(callback: (payload: Record<string, any>) => void): number;

  /***
   * Unregisters a previously registered callback
   * @param id The unique identifier of the callback to unregister
  */
  unregister(id: number): void;

  /***
  * Waits for the specified callbacks to complete before conotinuing execution
  * @param ids An array of unique identifiers for the callbacks to wair for
  */
  waitFor(ids: number[]): void;

  /***
  */
  dispatch(payload: Record<string, any>): void;

}
