import { legacy_createStore as createStore } from "redux";
import CounterReducer from "./NewCounter";

//store
const store = createStore(CounterReducer)
export default store