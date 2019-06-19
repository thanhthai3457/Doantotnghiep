import usersRoutes from './routes/index.js'

exports.register = async(server, option) =>{

  server.route(usersRoutes)
}

exports.name = 'users-login'