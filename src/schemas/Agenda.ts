import { Document, Schema, Model, model } from 'mongoose'
import { AgendaInterface } from '../interfaces/Agenda'

export interface AgendaModel extends AgendaInterface, Document {
}

const AgendaSchema = new Schema({
  data: Date,
  valor: Number,
  cachorro: { type: Schema.Types.ObjectId, ref: 'User' },
  servico: {
    type: String,
    enum: ['banho', 'tosa', 'remocao Sub Pelo', 'tosa tesoura']
  },
  pacoteBanho: {
    qtdBanhos: Number,
    diaContrato: Date // A definir melhor a forma de guardar a data
  }
})

export const Agenda: Model<AgendaModel> = model<AgendaModel>('Agenda', AgendaSchema)
