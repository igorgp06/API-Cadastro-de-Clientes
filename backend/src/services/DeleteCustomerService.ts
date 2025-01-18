import prismaClient from '../prisma'

interface DeleteCustomerProps {
    id: string
}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps) {

        /* mehlorar o tratamento de erros */
        if (!id) {
            throw new Error("Solicitação de ID inválida!")
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })


        if (!findCustomer) {
            throw new Error("Cliente inexistente!")
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return { message: "Cliente deletado com sucesso!" }

    }
}

export { DeleteCustomerService }