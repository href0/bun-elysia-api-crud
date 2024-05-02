  export class ResponseError extends Error {
    status : number
    data : any
    
    constructor(status : number, message : string, data = null){
      super(message)
      this.status = status
      this.data = data
    }
  }

