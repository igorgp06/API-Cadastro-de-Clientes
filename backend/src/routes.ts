import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/createCustomerController";

export async function routes(fastify: FastifyInstance, opts: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/customer", async (request:FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })
}