
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
  map,
  exhaustMap,
  retry,
  catchError,
  filter,
} from 'rxjs/operators';


const type = createAction('catalog/request')

import { createAction } from '@reduxjs/toolkit';
import { failure, success } from './catalogSlice';

export const catalogRequestEpic = (action$) => action$.pipe(
 filter(type.match),
  exhaustMap((o) => {
    const categoryId = o.payload && o.payload.categoryId;
    const offset = o.payload && o.payload.offset;
    const q = o.payload && o.payload.q;
    const urlParams = new URLSearchParams();
    if (categoryId) urlParams.set('categoryId', categoryId);
    if (offset) urlParams.set('offset', offset);
    if (q && (q !== '')) urlParams.set('q', q);
    return ajax.getJSON(`${process.env.REACT_APP_BACKEND_URL}/items?${urlParams.toString()}`).pipe(
      retry(5),
      map((obj) => success(obj)),
      catchError((e) => of(failure(e))),
    );
  }),
);
