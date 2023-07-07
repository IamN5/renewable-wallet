export type Key = string;

export type Value = string | null;

export type MultiGetPair = [string, Value];

export type MultiSetPair = [string, string];

export interface Adapter {
  multiGet(keys: Key[]): Promise<MultiGetPair[]>;
  multiSet(values: MultiSetPair[]): Promise<void>;
  multiRemove(keys: Key[]): Promise<void>;
  get(key: Key): Promise<Value>;
  set(key: Key, value: string): Promise<void>;
  remove(key: Key): Promise<void>;
  clear(): Promise<void>;
}
