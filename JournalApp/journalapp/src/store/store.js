import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";
import thunk from "redux-thunk";
import { notesReducer } from "../reducers/notesReducer";

//Para trabajar acciones asincronas en nuestra aplicacion
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer,
});

export const store = createStore(
  reducers,
  //Para trabajar acciones asincronas en nuestra aplicacion
  composeEnhancers(applyMiddleware(thunk))
);

//enviaremos el store al punto o unos de los puntos mas altos de la aplicacion
