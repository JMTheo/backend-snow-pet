import app from './app'
const port = process.env.PORT || 33333

app.listen(port, () => console.log(`Servidor aberto na porta: ${port}`))
