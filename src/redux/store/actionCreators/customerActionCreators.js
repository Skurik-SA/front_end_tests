import {ADD_CUSTOMER, ADD_MANY_CUSTOMERS, DELETE_CUSTOMER} from "../actions/customerActions";

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const addManyCustomerAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
export const deleteCustomerAction = (payload) => ({type: DELETE_CUSTOMER, payload})