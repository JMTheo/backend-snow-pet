import { createServer } from 'http'
import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import schema from './graphql/schema'

import app from './app'
const port = process.env.PORT || 33333

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)]
})

server.applyMiddleware({ app, path: '/graphql' })

const httpServer = createServer(app)
httpServer.listen({ port: port }, (): void =>
  console.log(
    `\nServidor aberto, GraphQL => http://localhost:${port}/graphql`
  )
)
