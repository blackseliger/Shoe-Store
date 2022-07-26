import { combineReducers } from 'redux';
import categoriesReducer from './categories/categoriesSlice';
import topSalesReducer from './topSales/topSalesSlice';
import catalogReducer from './catalog/catalogSlice';
import catalogItemReducer from './catalogItem/catalogItemSlice';
import cartReducer from './cart/cartSlice';
import orderReducer from './order/orderSlice';
import globalSettingsReducer from './globalSettings/globalSettingsSlice'


const reducer = combineReducers({
  globalSettings: globalSettingsReducer,
  categories: categoriesReducer,
  catalog: catalogReducer,
  catalogItem: catalogItemReducer,
  topSales: topSalesReducer,
  cart: cartReducer,
  order: orderReducer,
});

export default reducer;
