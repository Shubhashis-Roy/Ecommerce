import { combineReducers } from "redux";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: string) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootPersistConfig = {
  key: "root",
  version: 1,
  storage,
  keyPrefix: "redux-",
  blacklist: [],
  // whitelist: [],
};

const rootReducer = combineReducers({
  // Slice
});

export { rootReducer, rootPersistConfig };
