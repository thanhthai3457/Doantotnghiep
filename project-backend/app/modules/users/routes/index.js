import usersVal from '../validate/index.js'
import usersController from '../controller/index.js'

export default [
  {
    method: 'GET',
    path: '/get-taikhoan',
    handler: usersController.getDsTaiKhoan,
    config: {
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: { '400': { 'description': 'Bad request' } },
          payloadType: 'json'
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/taikhoan',
    handler: usersController.save,
    config: {
      tags: ['api'],
      validate: usersVal.save,
      plugins: {
        'hapi-swagger': {
          responses: { '400': { 'description': 'Bad request' } },
          payloadType: 'json'
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/login',
    handler: usersController.login,
    config: {
      tags: ['api'],
      validate: usersVal.login,
      auth: false,
      plugins: {
        'hapi-swagger': {
          responses: { '400': { 'description': 'Bad request' } },
          payloadType: 'json'
        }
      }
    }
  }
]

