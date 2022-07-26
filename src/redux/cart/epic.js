
import {
    map,
    tap,
    distinctUntilChanged,
    ignoreElements,
  } from 'rxjs/operators';
  
  export const cartEpic = (_, state$) => state$.pipe(
    map((state) => state.cart),
    distinctUntilChanged(),
    tap((cart) => console.log(cart)),
    tap((cart) => localStorage.setItem('cart', JSON.stringify(cart))),
    ignoreElements(),
  );
  