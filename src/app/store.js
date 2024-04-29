//const { configureStore } = require("@reduxjs/toolkit");
//const { cakeReducer } = require("../features/cake/cakeSlice");
//const { icecreamReducer } = require("../features/iceCream/iceCreamSlice");
// const { default: logger } = require("redux-logger");
// const { userReducer } = require("../features/user/userSlice");

import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/iceCream/iceCreamSlice";
import userReducer from "../features/user/userSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

//module.exports = store;
export default store;
