
import { prisma } from "../../config/database"
import { ResponseError } from "../../error/response.error"
import { IProduct } from "./product.model"

export const create = async (request : IProduct) : Promise<IProduct> => {
  const createProduct = await prisma.product.create({ 
    data : request, 
    select : { id : true, name : true, price : true } 
  })

  return createProduct
}

export const findAll  = async (filter : any) : Promise<Array<IProduct>> => {
  const products = await prisma.product.findMany()
  return products
}

export const findOne = async(id : number) : Promise<IProduct> => {
  const product = await prisma.product.findFirst({
    where : { id : id }
  })

  if(!product) throw new ResponseError(404, "Product Not Found")
    
  return product
} 

export const update = async(id : number, request : IProduct) : Promise<IProduct> => {
  const check = await prisma.product.findFirst({
    where : { id }
  })

  if(!check) throw new ResponseError(404, "Product Not Found")

  const updateProduct = await prisma.product.update({ 
    where : { id : id },
    data : request, 
    select : { id : true, name : true, price : true } 
  })

  return updateProduct
}

export const remove = async(id : number) => {
  const check = await prisma.product.findFirst({
    where : { id }
  })

  if(!check) throw new ResponseError(404, "Product Not Found")

  const deleteProduct = await prisma.product.delete({
    where : { id }
  })

  return deleteProduct
}
