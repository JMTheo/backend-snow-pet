import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { config, DotenvConfigOutput } from 'dotenv'
import morgan from 'morgan'

import routes from './routes'

class App {
  public express: express.Application
  public dotEnv: DotenvConfigOutput

  public constructor () {
    this.express = express()
    this.dotEnv = config()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(morgan('dev'))
  }

  private database (): void {
    mongoose.connect(process.env.MONGO_URI_ONLINE, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })

    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'Erro ao se conectar com o banco:'))
    db.once('open', () => console.log('Banco conectado'))
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
