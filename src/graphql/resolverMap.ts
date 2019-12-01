import { IResolvers } from "graphql-tools";
import { User, UserModel } from "../models/User";
import { DocumentQuery } from "mongoose";

const resolverMap: IResolvers = {
  Query: {
    users: (): DocumentQuery<UserModel[], UserModel> => User.find(),
    user: (_, { cpf }) => User.findOne({cpf})
  },
  Mutation: {
    createUser: (_, { nome, cpf, telefone, email, password, raca, porte, nomeCachorro }): Promise<UserModel> =>
      User.create({
      nome,
      cpf,
      telefone,
      login: { email, password },
      cachorro: { nomeCachorro, raca, porte }
    }),
    updateUser: async (_, { nome, cpf, telefone, raca, porte, nomeCachorro }): Promise<UserModel> => {
      try {
        
        await User.findOneAndUpdate(
          { cpf },
          { nome, cpf, telefone, cachorro: {raca, porte, nomeCachorro }}, 
        );
      } catch (error) {
        return error
      }
      return await User.findOne({ cpf })
    },
    deleteUser: async (_, { cpf }): Promise<UserModel> => {
      let doc:UserModel
      try {
        doc = await User.findOneAndDelete({ cpf });
      } catch (err) {
        return err
      }
      return doc
    }
  }
};
export default resolverMap;
