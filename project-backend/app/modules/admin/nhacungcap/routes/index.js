import NhaCungCapController from '../controller/index.js'
import NhaCungCapVal from '../validate/index.js'

export default [{
    method: 'POST',
    path: '/nhacungcap',
    handler: NhaCungCapController.save,
    config: {
        validate: NhaCungCapVal.save,
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
    path: '/get-nhacungcap',
    handler: NhaCungCapController.get,
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
    path: '/getbyid-nhacungcap/{id}',
    handler: NhaCungCapController.getByid,
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
    path:'/delete-nhacungcap/{id}',
    handler: NhaCungCapController.Delete
}
]
