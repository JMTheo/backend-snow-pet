
import app from './app'
const port = process.env.PORT || 5000

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.listen(port, (): any => console.log(`Servidor aberto em: http://localhost:${port}/`))
