import { Request, Response } from 'express'
import { User } from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  public async remove (req: Request, res: Response): Promise<Response> {
    const { cpf } = req.body

    try {
      await User.findOneAndDelete({ cpf: cpf })
    } catch (Err) {
      return res.status(500).json({ msg: 'erro ao excluir' })
    }

    res.json({ msg: 'Sucesso ao excluir o registro' })
  }
}

export default new UserController()
