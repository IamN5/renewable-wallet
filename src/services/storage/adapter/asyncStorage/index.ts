/* eslint-disable import/prefer-default-export */
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Adapter, MultiGetPair, MultiSetPair, Value } from '../Adapter';

export class AsyncStorageAdapter implements Adapter {
  async multiGet(keys: string[]): Promise<MultiGetPair[]> {
    const r = await AsyncStorage.multiGet(keys);

    return JSON.parse(JSON.stringify(r));
  }

  async multiSet(values: MultiSetPair[]): Promise<void> {
    return AsyncStorage.multiSet(values);
  }

  async multiRemove(keys: string[]): Promise<void> {
    return AsyncStorage.multiRemove(keys);
  }

  async get(key: string): Promise<Value> {
    return AsyncStorage.getItem(key);
  }

  async set(key: string, value: string): Promise<void> {
    return AsyncStorage.setItem(key, value);
  }

  async remove(key: string): Promise<void> {
    return AsyncStorage.removeItem(key);
  }

  async clear(): Promise<void> {
    return AsyncStorage.clear();
  }
}
