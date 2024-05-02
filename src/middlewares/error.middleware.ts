import Elysia, { Context } from 'elysia'
import { ResponseError } from '../error/response.error'

export const error = () =>
  new Elysia().onError((c) => {
    console.log('error ', c.error)
    console.log('error code ', c.code)
    // console.log('is response ', c.code)

    let message : any = c.error?.message
    const stack = process.env.NODE_ENV === 'production' ? null : c.error?.stack
    c.set.status = c.set.status || 500

    if (c.code === 'NOT_FOUND') {
      c.set.status = 501
      message = `Not Found - [${c.request.method}]:[${c.path}]`
    } else if (c.code === 'VALIDATION') {
      c.set.status = 422
      message = c.error.all
    } 
    return { message, stack }
  })