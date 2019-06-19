import authuJwt2 from 'hapi-auth-jwt2'

exports.register = async (server, options) => {
  const validate = async function (decoded, request) {
    const redis = server.redis
    let res = await redis.getAsync(decoded.id)
    if(res) {  
      let session = JSON.parse(res)
      if(session.valid === true) {
        return { isValid: true }
      } else {
        return { isValid: false }
      }
    } else {
      return { isValid: false }
    }
}

  await server.register(require('hapi-auth-jwt2'));
  server.auth.strategy('jwt', 'jwt',
  { key: global.CONFIG.get('web.key'),          // Never Share your secret key
    validate: validate,            // validate function defined above
    verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm
  });

server.auth.default('jwt');
}

exports.name = 'authu-jwt-2'
exports.dependencies = ['app-redis']