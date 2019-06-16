import phieuNhapRoutes from './routes/index.js'

exports.register = async(server, option) =>{

  server.route(phieuNhapRoutes)
}

exports.name = 'admin-phieunhap'