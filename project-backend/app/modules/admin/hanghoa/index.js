import hangHoaRoutes from './routes/index.js'

exports.register = async(server, option) =>{

  server.route(hangHoaRoutes)
}

exports.name = 'admin-hanghoa'