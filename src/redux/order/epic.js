import { createAction } from '@reduxjs/toolkit';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
    map,
    exhaustMap,
    catchError,
    filter,
} from 'rxjs/operators';
import { submitFailure, submitSuccess } from './orderSlice';

const type = createAction('order/submitRequest');

export const orderRequestEpic = (action$) => action$.pipe(
    filter(type.match),
    exhaustMap((o) => {
        const data = o.payload;
        return ajax({
            url: `${process.env.REACT_APP_BACKEND_URL}/order`,
            method: 'POST',
            headers: {
                'Content-Type': 'Application/JSON',
            },
            body: JSON.stringify(data),
        }).pipe(
            map((obj) => submitSuccess(obj)),
            catchError((e) => of(submitFailure(e))),
        );
    }),
);
