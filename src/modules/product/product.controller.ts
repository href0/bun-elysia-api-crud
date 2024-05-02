import { Context } from 'elysia'
import { response } from '../../helpers/response.helper'
import * as productService from './product.service'
import { IProduct, IProductId } from './product.model'

export const findALl = async ({ set } : Context) => {
    const data = await productService.findAll({})
    return response(set, data)
}

export const findOne = async (c : Context) => {
  const { id } = c.params
  const data = await productService.findOne(id)
  return response(c, data)
}

export const create = async ({ set, body }: Context<{body : IProduct}>) => {
  const createProduct = await productService.create(body)
  return response(set, createProduct, "Product Created Successfully", 201)
}

export const update = async ({ set, body, params }: Context<{body : IProduct, params : IProductId }>) => {
  const { id } = params
  const createProduct = await productService.update(id, body)
  return response(set, createProduct, "Product Updated Successfully")
}

export const remove = async ({ set, params }: Context<{body : IProduct, params : IProductId }>) => {
  const { id } = params
  await productService.remove(id)
  return response(set, null, "Product Deleted Successfully")
}