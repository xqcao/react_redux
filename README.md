# import createStore
```
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
```
# create a store
```
const store = createStore(reduces, composeEnhancers(applyMiddleware(thunk)));
```
# [page view](http://xqcao.github.io/react_redux)