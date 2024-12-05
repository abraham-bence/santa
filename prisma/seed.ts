import { PrismaClient } from "@prisma/client"
import {fa, faker} from "@faker-js/faker"

const prisma = new PrismaClient()

const materials = ["wood", "metal", "plastic", "other"]


async function main() {

    for (let i = 0; i < 20; i++) {
        const kids = await prisma.kids.create({
            data: {
                name : faker.person.fullName(),
                address : faker.location.country() + ", " + faker.location.city() + ", " + faker.location.streetAddress(),
                wasGood: faker.datatype.boolean(),
            }
        })
    }
    for (let i = 0; i < 20; i++) {
        const toys = await prisma.toys.create({
            data: {
                name: faker.commerce.productName(),
                material: materials[faker.number.int({min: 0, max: 3})],
                weight: faker.number.float({min:0.1}),
                kids: {connect: {id: faker.number.int({min: 1, max: 20})}}

            }
        })
        console.log(toys)
    }
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })