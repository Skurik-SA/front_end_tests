import {DECREMENT, INCREMENT} from "../actions/countActions";

export const incrementCreator = () => ({type: INCREMENT})
export const decrementCreator = () => ({type: DECREMENT})