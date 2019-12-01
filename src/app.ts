import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { config, DotenvConfigOutput } from 'dotenv'
import morgan from 'morgan'
import compression from 'compression'

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
    this.express.use('*', cors())
    this.express.use(compression())
  }

  private database (): void {
    mongoose.connect(process.env.MONGO_URI_OFFLINE, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })

    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'Erro ao se conectar com o banco:'))
    db.once('open', ():void => console.log('Banco conectado'))
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
