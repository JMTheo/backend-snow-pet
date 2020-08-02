import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()
// Rotas usuario
routes.get('/users', UserController.index)
routes.get('/users/:cpf', UserController.find)
routes.post('/users', UserController.store)
routes.delete('/users/:cpf', UserController.remove)
routes.put('/users', UserController.update)

export default routes
