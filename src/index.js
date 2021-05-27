import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
import configureStore from "./store/store";

const store = configureStore();

store.subscribe(() => {
  console.log("Store changed!");
  console.log(store.getState());
});

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));

store.dispatch(bugResolved({ id: 1 }));

store.dispatch(bugRemoved({ id: 1 }));
