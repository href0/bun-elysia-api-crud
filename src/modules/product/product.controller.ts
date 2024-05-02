import { Context } from 'elysia'
import { response } from '../../helpers/response.helper'
import * as productService from './product.service'
import { IProduct, IProductId } from './product.model'

export const findALl = async ({ set } : Context) => {
    const data = await productService.findAll({})
    return response<Array<IProduct>>(set, data)
}

export const findOne = async ( { set, params } : Context<{params : IProductId}>) => {
  const { id } = params
  const data = await productService.findOne(id)
  return response<IProduct>(set, data)
}

export const create = async ({ set, body }: Context<{body : IProduct}>) => {
  const createProduct = await productService.create(body)
  return response<IProduct>(set, createProduct, "Product Created Successfully", 201)
}

export const update = async ({ set, body, params }: Context<{body : IProduct, params : IProductId }>) => {
  const { id } = params
  const createProduct = await productService.update(id, body)
  return response<IProduct>(set, createProduct, "Product Updated Successfully")
}

export const remove = async ({ set, params }: Context<{body : IProduct, params : IProductId }>) => {
  const { id } = params
  await productService.remove(id)
  return response<null>(set, null, "Product Deleted Successfully")
}