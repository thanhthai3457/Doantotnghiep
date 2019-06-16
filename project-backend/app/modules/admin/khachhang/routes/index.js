import KhachHangController from '../controller/index.js'
import KhachHangVal from '../validate/index.js'

export default [{
    method: 'POST',
    path: '/khachhang',
    handler: KhachHangController.save,
    config: {
        validate: KhachHangVal.save,
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
    path: '/get-khachhang',
    handler: KhachHangController.get,
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
// {
//     method: 'GET',
//     path: '/image/{img}',
//     handler: function (request, h) {
//         try {
//             return h.file('app/lib/img/' + request.params.img);
//         } catch (err) {
//         }
//     }
// },
{
    method: 'GET',
    path: '/getbyid-khachhang/{id}',
    handler: KhachHangController.getByid,
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
    path:'/delete-khachhang/{id}',
    handler: KhachHangController.Delete
}
]
