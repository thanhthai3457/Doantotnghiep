'use strict'
export const loader = async function (server) {
  const Pack = require('./../../package')
  await server.register([
    {
      plugin: require('inert')
    },
    {
      plugin: require('vision')
    },
    {
      plugin: require('hapi-swagger'), // inert, vision dependency
      options: {
        host: global.CONFIG.get('web.swagger.host'),
        schemes: global.CONFIG.get('web.swagger.schemes'),
        info: {
          title: 'Documentation',
          version: Pack.version
        }
      }
    },
    {
      plugin: require('../lib/mongo.js'),
      
      
    }
  ])
    .then(async (err) => {
      if (err) {
        console.log(err)
      }
      /* Load models */
      require('@models/loaihanghoa/model.js')
      require('@models/khachhang/model.js')
      require('@models/nhanvien/model.js')
      require('@models/nhacungcap/model.js')
      require('@models/hanghoa/model.js')
      require('@models/phieunhap/model.js')

      /* Load Modules */
      let modules = []
      modules.push(require('@modules/admin/loaihanghoa'))
      modules.push(require('@modules/admin/khachhang'))
      modules.push(require('@modules/admin/nhanvien'))
      modules.push(require('@modules/admin/nhacungcap'))
      modules.push(require('@modules/admin/hanghoa'))
      modules.push(require('@modules/admin/phieunhap'))

      if (modules.length) {
        let options = {}
        options.routes = { prefix: '/api/thanh' }
        await server.register(modules, options, (err) => {
          if (err) {
            console.log(err)
          }
        })
      }
      // console.log(server)
    })
}
