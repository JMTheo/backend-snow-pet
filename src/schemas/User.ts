import { Document, Schema, Model, model } from 'mongoose'
import { UserInterface } from '../interfaces/user'

export interface UserModel extends UserInterface, Document {
  fullName(): string
}

const UserSchema = new Schema({
  nome: { type: String, required: true },
  cpf: { type: String, unique: true },
  telefone: { type: String, required: true, index: true },
  cachorro: {
    porte: {
      type: String,
      enum: ['pequeno', 'medio', 'grande']
    },
    nomeCachorro: String,
    raca: { type: String, required: true }
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
