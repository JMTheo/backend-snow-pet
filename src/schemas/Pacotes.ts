import { Document, Schema, Model, model } from 'mongoose'
import { PacotesInterface } from '../interfaces/Pacotes'

export interface PacotesModel extends PacotesInterface, Document {
}

const PacoteSchema = new Schema({
  data: Date,
  cachorro: { type: Schema.Types.ObjectId, ref: 'User' },
  quantidade: Number
})

export const Pacote: Model<PacotesModel> = model<PacotesModel>('Pacotes', PacoteSchema)
