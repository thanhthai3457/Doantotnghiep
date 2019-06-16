import NhanVienController from '../controller/index.js'
import NhanVienVal from '../validate/index.js'

export default [{
    method: 'POST',
    path: '/nhanvien',
    handler: NhanVienController.save,
    config: {
        validate: NhanVienVal.save,
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
    path: '/get-nhanvien',
    handler: NhanVienController.get,
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
    path: '/getbyid-nhanvien/{id}',
    handler: NhanVienController.getByid,
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
    path:'/delete-nhanvien/{id}',
    handler: NhanVienController.Delete
}
]
