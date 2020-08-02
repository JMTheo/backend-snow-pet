import { Request, Response } from 'express'
import { User } from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.create(req.body)
      return res.json(user)
    } catch (error) {
      return res.status(400).send(`Erro ao cadastrar: ${error}`)
    }
  }

  public async find (req: Request, res: Response): Promise<Response> {
    const tel:string = req.params.tel

    try {
      const user = await User.findOne({ telefone: tel })

      return res.json(user)
    } catch (error) {
      return res.status(400).send(`Erro ao executar busca: ${error}`)
    }
  }

  public async remove (req: Request, res: Response): Promise<Response> {
    const tel:string = req.params.tel

    try {
      await User.findOneAndDelete({ telefone: tel })
    } catch (err) {
      return res.status(500).json({ error: err })
    }

    res.json({ msg: 'Sucesso ao excluir o registro' })
  }

  public async update (req: Request, res: Response): Promise<Response> {
    try {
      await User.findOneAndUpdate({ telefone: req.body.tel }, req.body)
    } catch (error) {
      return res.json({ error: error })
    }
    const user = await User.findOne({ telefone: req.body.tel })
    return res.json({ msg: 'Sucesso ao atualizar o registro', reg: user })
  }
}

export default new UserController()
