import { Adapter } from './adapter';
import { MultiGetPair, MultiSetPair, Value } from './adapter/Adapter';

export default class Service implements Adapter {
  private adapter: Adapter;

  constructor(serviceAdapter: Adapter) {
    this.adapter = serviceAdapter;
  }

  multiGet(keys: string[]): Promise<MultiGetPair[]> {
    return this.adapter.multiGet(keys);
  }

  multiSet(values: MultiSetPair[]): Promise<void> {
    return this.adapter.multiSet(values);
  }

  multiRemove(keys: string[]): Promise<void> {
    return this.adapter.multiRemove(keys);
  }

  get(key: string): Promise<Value> {
    return this.adapter.get(key);
  }

  set(key: string, value: string): Promise<void> {
    return this.adapter.set(key, value);
  }

  remove(key: string): Promise<void> {
    return this.adapter.remove(key);
  }

  clear(): Promise<void> {
    return this.adapter.clear();
  }
}
