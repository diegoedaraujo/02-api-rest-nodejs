import { env } from './env'
import { app } from './app'

app.addHook('preHandler', async (request, reply) => {
  console.log(`[${request.method}] ${request.url}`)
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Http Server is running!')
  })
