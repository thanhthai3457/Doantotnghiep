import phieuNhapVal from '../validate/index.js'
import phieuNhapController from '../controller/index.js'

export default [
  {
    method: 'POST',
    path: '/get-phieunhap-byncc',
    handler: phieuNhapController.getPhieuNhapByNCC,
    config: {
      // validate: phieuNhapVal.byNCC,
      tags: ['api'],
      plugins: {
          'hapi-swagger': {
              responses: { '400': { 'description': 'Bad Request' } },
              payloadType: 'json'
          }
      }
    }
  },
  {
    method: 'DELETE',
    path: '/delete-phieunhap',
    handler: phieuNhapController.Delete,
    config: {
      // validate: phieuNhapVal.byidvadelete,
      tags: ['api'],
      plugins: {
          'hapi-swagger': {
              responses: { '400': { 'description': 'Bad Request' } },
              payloadType: 'json'
          }
      }
    }
  },
  {
    method: 'POST',
    path: '/get-phieunhap-byid',
    handler: phieuNhapController.getPhieuNhapByid,
    config: {
      // validate: phieuNhapVal.byidvadelete,
      tags: ['api'],
      plugins: {
          'hapi-swagger': {
              responses: { '400': { 'description': 'Bad Request' } },
              payloadType: 'json'
          }
      }
    }
  },
  {
    method: 'GET',
    path: '/get-phieunhap',
    handler: phieuNhapController.getPhieuNhap,
    config: {
      tags: ['api'],
      plugins: {
          'hapi-swagger': {
              responses: { '400': { 'description': 'Bad Request' } },
              payloadType: 'json'
          }
      }
    }
  },
  {
    method: 'POST',
    path: '/phieunhap',
    handler: phieuNhapController.save,
    config: {
        validate: phieuNhapVal.save,
        tags: ['api'],
        plugins: {
            'hapi-swagger': {
                responses: { '400': { 'description': 'Bad Request' } },
                payloadType: 'json'
            }
        }
    }
  },
]

