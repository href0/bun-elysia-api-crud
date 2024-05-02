export interface IResponse<T> {
  message : string
  data : T | null
  pagination? : any
}

export const response = <T>(
  set : any, data : T | null = null, 
  message = 'success', 
  status = 200, 
  pagination = null
) => {
  let resp : IResponse<T> = {
    message    : message,
    data       : data
  }
  if(pagination) {
    resp['pagination'] = pagination
  }

  set.status = status
  return resp
}