import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";

//Para trabajar acciones asincronas en nuestra aplicacion
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducer,
  //Para trabajar acciones asincronas en nuestra aplicacion
  composeEnhancers(applyMiddleware(thunk))
);

//enviaremos el store al punto o unos de los puntos mas altos de la aplicacion
