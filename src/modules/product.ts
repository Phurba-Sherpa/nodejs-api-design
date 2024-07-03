import prisma from "../db"

const MSG_USER_NOT_EXITS = 'The specified user ID does not match any existing users'
const MSG_PROD_NOT_EXITS = 'The specified product ID does not match any existing products'

export const checkUserExists = async (value) => {
    if (!value) return false
    const user = await prisma.user.findUnique({where: {
        UserId: value
    }})

    if (!user) {
        throw new Error(MSG_USER_NOT_EXITS)
    }
    return !!user
}

export const checkProductExists = async value => {
    if (!value) {
        return false
    }
    const product = await prisma.product.findUnique({
        where: {
            ProductId: value
        }
    })

    if (!product) {
        throw new Error(MSG_PROD_NOT_EXITS)
    }

}