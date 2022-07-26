import { combineEpics } from 'redux-observable';
import { categoryRequestEpic } from './categories/epic';
import { topSalesRequestEpic } from './topSales/epic';
import { catalogRequestEpic } from './catalog/epic';
import { catalogItemRequestEpic } from './catalogItem/epic'
import {cartEpic} from './cart/epic';
import { orderRequestEpic } from './order/epic';

const epic = combineEpics(
  topSalesRequestEpic,
  catalogRequestEpic,
  categoryRequestEpic,
  catalogItemRequestEpic,
  cartEpic,
  orderRequestEpic,
);

export default epic;
