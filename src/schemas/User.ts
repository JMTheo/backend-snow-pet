import { Document, Schema, Model, model } from 'mongoose'
import { UserInterface } from '../interfaces/user'

export interface UserModel extends UserInterface, Document {}

const UserSchema = new Schema({
  nome: { type: String, required: true },
  telefone: { type: String, required: true, index: true },
  cachorro: {
    porte: {
      type: String,
      enum: ['pequeno', 'medio', 'grande']
    },
    nomeCachorro: String,
    raca: { type: String, required: true },
    pacote: {
      qtdBanhos: Number,
      bonus: Boolean,
      limiteMaximo: Date
    }
  }
},
{
  timestamps: true
}
)

export const User: Model<UserModel> = model<UserModel>('User', UserSchema)
