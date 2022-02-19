export default function counterReducer(store = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...store, count: store.count + 1 };
    case "DECREMENT":
      return { ...store, count: store.count - 1 };
    default:
      return store;
  }
}
