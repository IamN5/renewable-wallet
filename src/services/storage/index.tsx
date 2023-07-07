import { AsyncStorageAdapter } from './adapter';
import Service from './Service';

const storage = new Service(new AsyncStorageAdapter());

export default storage;
