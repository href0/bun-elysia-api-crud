import { Context } from "elysia"

export interface IResponse {
  message : string
  data : any
  pagination? : any
}

export const response = (set : any, data : any = null, message = 'success', status = 200, pagination = null) => {
  let resp : IResponse = {
    message    : message,
    data       : data
  }
  if(pagination) {
    resp['pagination'] = pagination
  }

  set.status = status
  console.log(resp)
  return resp
}