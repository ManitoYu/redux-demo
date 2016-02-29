import rootReducer from '../reducers'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
  return store
}
