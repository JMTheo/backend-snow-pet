import { Document, Schema, Model, model } from 'mongoose'
import { UserInterface } from '../interfaces/user'

export interface UserModel extends UserInterface, Document {
  fullName(): string
}

const UserSchema = new Schema({
  nome: { type: String, required: true },
  cpf: { type: String, index: true, unique: true },
  telefone: { type: String, required: true },
  login: {
    email: { type: String },
    password: { type: String }
  },
  cachorro: {
    raca: { type: String, required: true },
    porte: {
      type: String,
      enum: ['pequeno', 'medio', 'grande']
    },
    nomeCachorro: String
  }
},
{
  timestamps: true
}
)

UserSchema.methods.fullName = function (): string {
  return (this.firstName.trim() + ' ' + this.lastName.trim())
}

export const User: Model<UserModel> = model<UserModel>('User', UserSchema)
