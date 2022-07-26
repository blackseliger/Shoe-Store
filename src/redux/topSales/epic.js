
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
import { failure, success } from './topSalesSlice';


const type = createAction('topSales/request')

export const topSalesRequestEpic = (action$) => action$.pipe(
    filter(type.match),
    exhaustMap(() => ajax.getJSON(`${process.env.REACT_APP_BACKEND_URL}/top-sales`).pipe(
        retry(5),
        map((response) => success(response)),
        catchError((e) => of(failure(e))),
      ))
)
