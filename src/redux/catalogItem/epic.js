
import { createAction } from '@reduxjs/toolkit';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
  map,
  exhaustMap,
  retry,
  catchError,
  filter,
} from 'rxjs/operators';
import { failure, success } from './catalogItemSlice';

const type = createAction('catalogItem/request')


export const catalogItemRequestEpic = (action$) => action$.pipe(
  filter(type.match),
  exhaustMap((o) => {
    const id = o.payload;
    return ajax.getJSON(`${process.env.REACT_APP_BACKEND_URL}/items/${id}`).pipe(
      retry(5),
      map((obj) => success(obj)),
      catchError((e) => of(failure(e))),
    );
  }),
);
