import mailRoutes from './routes/index.js'

exports.register = async(server, option) =>{

  server.route(mailRoutes)
}

exports.name = 'mail'