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

  public async find (req: Request, res: Response): Promise<Response> {
    const cpf:string = req.params.cpf

    const user = await User.findOne({ cpf: cpf })

    return res.json(user)
  }

  public async remove (req: Request, res: Response): Promise<Response> {
    const cpf:string = req.params.cpf

    try {
      await User.findOneAndDelete({ cpf: cpf })
    } catch (err) {
      return res.status(500).json({ error: err })
    }

    res.json({ msg: 'Sucesso ao excluir o registro' })
  }

  public async update (req: Request, res: Response): Promise<Response> {
    try {
      await User.findOneAndUpdate({ cpf: req.body.cpf }, req.body)
    } catch (error) {
      return res.json({ error: error })
    }
    const user = await User.findOne({ cpf: req.body.cpf })
    return res.json({ msg: 'Sucesso ao atualizar o registro', reg: user })
  }
}

export default new UserController()
