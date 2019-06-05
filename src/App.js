import React from 'react';
import {Provider} from "react-redux";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CounerContainer from "./containers/CounterContainer";
import CounterReducer from "./reducers/CounterReducer";
import {i18nContext} from "./HOC/withI18n";
const store = createStore(CounterReducer,applyMiddleware(thunk));

const i18nContextData = {
  buttonIncrement:"INCREMENT",
  buttonDecrement:"DECREMENT",
  buttonIncrementBy10:"INCREMENT BY 10",
  buttonDecrementBy5:"DECREMENT BY 5",
  buttonSave:"SAVE"
}

function App() {
  return (
    <Provider store={store}>
      <i18nContext.Provider value={i18nContextData}>
        <CounerContainer />
      </i18nContext.Provider>
    </Provider>
  );
}

export default App;
