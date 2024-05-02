import { Elysia, t } from 'elysia'
import * as productControllelr from './product.controller'
import { createProductValidation, productIdValidation } from './product.validation'

const app = new Elysia({ prefix: '/products' })
    .get('/', productControllelr.findALl)
    .get('/:id', productControllelr.findOne, { params : productIdValidation })
    .post('/', productControllelr.create, { body : createProductValidation })
    .put('/:id', productControllelr.update, { params : productIdValidation, body : createProductValidation })
    .delete('/:id', productControllelr.remove, { params : productIdValidation })
export default app