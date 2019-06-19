import mailVal from '../validate/index.js'
import mailController from '../controller/index.js'

export default [
  {
    method: 'POST',
    path: '/mail',
    handler: mailController.sendMail,
    config: {
      validate: mailVal.sendMail,
      tags: ['api'],
      auth: false,
      plugins: {
          'hapi-swagger': {
              responses: { '400': { 'description': 'Bad Request' } },
              payloadType: 'json'
          }
      }
    }
  },
]

