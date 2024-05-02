export interface IProductId {
  id : number
}

export interface IProduct extends Partial<IProductId> {
  name : string
  price : number
}