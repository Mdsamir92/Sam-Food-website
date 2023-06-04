import { createStore } from "redux";
import rootred from "./redux/Reducers/main";


const store = createStore(
    rootred
);


export default store;