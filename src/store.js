import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";

import rootReducer from './reducers'
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store


// export default function configureStore() {
//   return createStore(rootReducer, applyMiddleware(thunk));
// }
