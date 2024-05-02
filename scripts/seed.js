const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const productsToCreate = [
  {
    id : 1,
    name : "Infinix GT 10 Pro",
    price : 3200000
  },
  {
    id : 2,
    name : "Samsung A55 S",
    price : 5600000
  },
  {
    id : 3,
    name : "Xiaomi Redmi Note 13",
    price : 4200000
  },
]

const createProducts = async (products) => {
  console.log('creating Products . . .')

  for (let index = 0; index < products.length; index++) {
    const product = products[index]
    await prisma.product.upsert({
      where : { id :  product.id},
      update : product,
      create : product
    })
    
  }

}

createProducts(productsToCreate)
  .then(() => {
    console.log('product created successfully')
  })
  .catch((e) => {
    console.log('error created product ', e)
  })