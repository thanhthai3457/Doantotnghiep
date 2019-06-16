import LoaiHangHoaController from '../controller/index.js'
import LoaiHangHoaVal from '../validate/index.js'

export default [{
    method: 'POST',
    path: '/loaihanghoa',
    handler: LoaiHangHoaController.save,
    config: {
        validate: LoaiHangHoaVal.save,
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
    path: '/get-loaihanghoa',
    handler: LoaiHangHoaController.get,
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
    method: 'GET',
    path: '/image/{img}',
    handler: function (request, h) {
        try {
            return h.file('app/lib/img/' + request.params.img);
        } catch (err) {
        }
    }
},
{
    method: 'GET',
    path: '/getbyid-loaihanghoa/{id}',
    handler: LoaiHangHoaController.getByid,
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
    method:'DELETE',
    path:'/delete-loaihanghoa/{id}',
    handler: LoaiHangHoaController.Delete
}
]
