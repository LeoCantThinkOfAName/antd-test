import { createStore, combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";

// reducers
import ImageReducer from "./image/reducer";

const rootReducer = combineReducers({
  imageList: ImageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = createStore(rootReducer);
