import {createStore, applyMiddleware} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(sagas)