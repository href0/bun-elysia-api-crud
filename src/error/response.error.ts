  export class ResponseError<T> extends Error {
    status : number
    data : T | null
    
    constructor(status : number, message : string, data : T | null = null){
      super(message)
      this.status = status
      this.data = data
    }
  }

