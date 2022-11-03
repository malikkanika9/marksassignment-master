import {legacy_createStore as  createStore,applyMiddleware  } from "redux";
import { reducers } from "../Reducer"; 
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const persistConfig = {
    key: 'root',
    storage,
  }

  const presistedReducer = persistReducer(persistConfig, reducers );
const store = createStore(presistedReducer, 
composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

export {store, persistor} 