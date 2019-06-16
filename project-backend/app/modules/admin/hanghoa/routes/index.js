import hangHoaVal from '../validate/index.js'
import hangHoaController from '../controller/index.js'

export default [
  {
    method: 'POST',
    path: '/get-hanghoa-bynccvaloaihang',
    handler: hangHoaController.getHangHoaByNCCvaLoaiHang,
    config: {
      validate: hangHoaVal.byNCCvaLoaiHang,
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
    path: '/get-hanghoa-byncc',
    handler: hangHoaController.getHangHoaByNCC,
    config: {
      validate: hangHoaVal.byNCC,
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
    path: '/delete-hanghoa',
    handler: hangHoaController.Delete,
    config: {
      validate: hangHoaVal.byidvadelete,
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
    path: '/get-hanghoa-byid',
    handler: hangHoaController.getHangHoaByid,
    config: {
      validate: hangHoaVal.byidvadelete,
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
    path: '/get-hanghoa',
    handler: hangHoaController.getHangHoa,
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
    path: '/hanghoa',
    handler: hangHoaController.save,
    config: {
        validate: hangHoaVal.save,
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
    path: '/hanghoavsloaihang',
    handler: hangHoaController.getLoaiHangHoaByHangHoa,
    config: {
        validate: hangHoaVal.byMatHangvaLoaiHang,
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

