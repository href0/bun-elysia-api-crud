import { t } from 'elysia'

export const createProductValidation = t.Object({
  name : t.String({
    minLength : 3,
    maxLength : 50
  }),
  price : t.Number({
    minimum : 1000
  })
})

export const productIdValidation = t.Object({
  id : t.Numeric()
})