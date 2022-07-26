/* eslint-disable no-undef */
import { createAction } from '@reduxjs/toolkit'

import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
    map, filter, exhaustMap,
    retry,
    catchError,
} from 'rxjs/operators'
import { success } from './categoriesSlice';



const increment = createAction('category/request');


export const categoryRequestEpic = (actions$) =>

    actions$.pipe(
        filter(increment.match),
        exhaustMap(() => ajax.getJSON(`${process.env.REACT_APP_BACKEND_URL}/categories`).pipe(
            retry(5),
            map((response) => success(response)),
            catchError((e) => of(e)),
        )),
    )