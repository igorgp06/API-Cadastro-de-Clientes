import Fastify from 'fastify'
import { routes } from './routes'
import cors from '@fastify/cors'

const app = Fastify({ logger: true })

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ messege: error.message })
})

const start = async () => {

    await app.register(cors);
    await app.register(routes);

    try {
        await app.listen({ port: 3333 })
    }catch(err) {
        app.log.error(err)
        process.exit(1)
    }
}

start();
