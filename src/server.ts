<<<<<<< HEAD
import { createServer } from 'http'

import app from './app'
const port = process.env.PORT || 33333

const httpServer = createServer(app)
httpServer.listen({ port: port }, (): void =>
  console.log(
    `\nServidor aberto http://localhost:${port}/`
  )
)
=======
import app from './app'
const port = process.env.PORT || 33333

app.listen(port, () => console.log(`Servidor aberto na porta: ${port}`))
>>>>>>> parent of 9f06e37... adicionando suporte ao GraphQL
