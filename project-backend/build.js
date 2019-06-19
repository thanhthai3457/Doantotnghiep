module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hapi = __webpack_require__(/*! hapi */ "hapi");

var _hapi2 = _interopRequireDefault(_hapi);

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _lodash = __webpack_require__(/*! lodash */ "lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _bootstrap = __webpack_require__(/*! ./app/bootstrap/bootstrap.js */ "./app/bootstrap/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.NODE_CONFIG_DIR = _path2.default.join(__dirname, '/app/config');
global.CONFIG = __webpack_require__(/*! config */ "config");

var options = _lodash2.default.cloneDeep(global.CONFIG.get('web.connection'));

const server = _hapi2.default.server(options); // Start the server


server.liftOff = async () => {
  try {
    // registering hapi plugins and bootstrap app
    await (0, _bootstrap.loader)(server);
    await server.start();
    console.log('Server started at: ' + server.info.uri);
  } catch (err) {
    console.log('ERROR: ', err);
    process.exit(1);
  }
};

server.liftOff();

/***/ }),

/***/ "./app/bootstrap/bootstrap.js":
/*!************************************!*\
  !*** ./app/bootstrap/bootstrap.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const loader = exports.loader = async function (server) {
  const Pack = __webpack_require__(/*! ./../../package */ "./package.json");

  await server.register([{
    plugin: __webpack_require__(/*! inert */ "inert")
  }, {
    plugin: __webpack_require__(/*! vision */ "vision")
  }, {
    plugin: __webpack_require__(/*! hapi-swagger */ "hapi-swagger"),
    // inert, vision dependency
    options: {
      host: global.CONFIG.get('web.swagger.host'),
      schemes: global.CONFIG.get('web.swagger.schemes'),
      info: {
        title: 'Documentation',
        version: Pack.version
      }
    }
  }, {
    plugin: __webpack_require__(/*! ../lib/mongo.js */ "./app/lib/mongo.js")
  }, {
    plugin: __webpack_require__(/*! ../lib/redis.js */ "./app/lib/redis.js")
  }, {
    plugin: __webpack_require__(/*! ../lib/auth.js */ "./app/lib/auth.js")
  }]).then(async err => {
    if (err) {
      console.log(err);
    }
    /* Load models */


    __webpack_require__(/*! @models/loaihanghoa/model.js */ "./app/models/loaihanghoa/model.js");

    __webpack_require__(/*! @models/khachhang/model.js */ "./app/models/khachhang/model.js");

    __webpack_require__(/*! @models/nhanvien/model.js */ "./app/models/nhanvien/model.js");

    __webpack_require__(/*! @models/nhacungcap/model.js */ "./app/models/nhacungcap/model.js");

    __webpack_require__(/*! @models/hanghoa/model.js */ "./app/models/hanghoa/model.js");

    __webpack_require__(/*! @models/phieunhap/model.js */ "./app/models/phieunhap/model.js");

    __webpack_require__(/*! @models/taikhoan/model.js */ "./app/models/taikhoan/model.js");

    __webpack_require__(/*! @models/mail/model.js */ "./app/models/mail/model.js");
    /* Load Modules */


    let modules = [];
    modules.push(__webpack_require__(/*! @modules/admin/loaihanghoa */ "./app/modules/admin/loaihanghoa/index.js"));
    modules.push(__webpack_require__(/*! @modules/admin/khachhang */ "./app/modules/admin/khachhang/index.js"));
    modules.push(__webpack_require__(/*! @modules/admin/nhanvien */ "./app/modules/admin/nhanvien/index.js"));
    modules.push(__webpack_require__(/*! @modules/admin/nhacungcap */ "./app/modules/admin/nhacungcap/index.js"));
    modules.push(__webpack_require__(/*! @modules/admin/hanghoa */ "./app/modules/admin/hanghoa/index.js"));
    modules.push(__webpack_require__(/*! @modules/admin/phieunhap */ "./app/modules/admin/phieunhap/index.js"));
    modules.push(__webpack_require__(/*! @modules/users */ "./app/modules/users/index.js"));
    modules.push(__webpack_require__(/*! @modules/mail */ "./app/modules/mail/index.js"));

    if (modules.length) {
      let options = {};
      options.routes = {
        prefix: '/api/thanh'
      };
      await server.register(modules, options, err => {
        if (err) {
          console.log(err);
        }
      });
    } // console.log(server)

  });
};

/***/ }),

/***/ "./app/lib/auth.js":
/*!*************************!*\
  !*** ./app/lib/auth.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hapiAuthJwt = __webpack_require__(/*! hapi-auth-jwt2 */ "hapi-auth-jwt2");

var _hapiAuthJwt2 = _interopRequireDefault(_hapiAuthJwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.register = async (server, options) => {
  const validate = async function (decoded, request) {
    const redis = server.redis;
    let res = await redis.getAsync(decoded.id);

    if (res) {
      let session = JSON.parse(res);

      if (session.valid === true) {
        return {
          isValid: true
        };
      } else {
        return {
          isValid: false
        };
      }
    } else {
      return {
        isValid: false
      };
    }
  };

  await server.register(__webpack_require__(/*! hapi-auth-jwt2 */ "hapi-auth-jwt2"));
  server.auth.strategy('jwt', 'jwt', {
    key: global.CONFIG.get('web.key'),
    // Never Share your secret key
    validate: validate,
    // validate function defined above
    verifyOptions: {
      algorithms: ['HS256'] // pick a strong algorithm

    }
  });
  server.auth.default('jwt');
};

exports.name = 'authu-jwt-2';
exports.dependencies = ['app-redis'];

/***/ }),

/***/ "./app/lib/mail.js":
/*!*************************!*\
  !*** ./app/lib/mail.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const nodemailer = __webpack_require__(/*! nodemailer */ "nodemailer");

const sendMail = async options => {
  console.log('bo day mail'); // create reusable transporter object using the default SMTP transport

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    // true for 465, false for other ports
    auth: {
      user: 'ngocthu34571@gmail.com',
      // generated ethereal user
      pass: 'toilatoi123' // generated ethereal password

    }
  });
  let optionsMail = {
    from: '"Fred Foo 👻" <ngocthu34571@gmail.com>',
    // sender address
    to: 'thanhthai3457@gmail.com',
    // list of receivers
    subject: options.subject,
    // Subject line
    text: options.text,
    // plain text body
    html: options.content // html body
    // send mail with defined transport object

  };
  await transporter.sendMail(optionsMail, function (err, res) {
    if (err) {
      console.log('Loi gui mail', err);
    } else {
      console.log("Message sent: %s", res.messageId);
    }
  });
};

exports.default = {
  sendMail
};

/***/ }),

/***/ "./app/lib/mailLienHe.js":
/*!*******************************!*\
  !*** ./app/lib/mailLienHe.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const mailLienHe = async data => {
  try {
    let content = fs.readFileSync(path.join(__dirname, 'app', 'lib', 'templateMailLienHe.html'));
    content = String(content);
    console.log('content', content);
    content = content.replace('{{content}}', data.tenNguoiGui);
    return content;
  } catch (err) {
    return err;
  }
};

exports.default = {
  mailLienHe
};

/***/ }),

/***/ "./app/lib/mongo.js":
/*!**************************!*\
  !*** ./app/lib/mongo.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoosePaginate = __webpack_require__(/*! mongoose-paginate */ "mongoose-paginate");

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.register = async function (server, options) {
  await _mongoose2.default.connect(global.CONFIG.get('web.db.uri'), {
    useNewUrlParser: true
  });

  _mongoose2.default.set('useCreateIndex', true);

  _mongoose2.default.plugin(_mongoosePaginate2.default);

  console.log('Register Mongo:', global.CONFIG.get('web.db.uri'));
};

exports.name = 'app-mongo';

/***/ }),

/***/ "./app/lib/redis.js":
/*!**************************!*\
  !*** ./app/lib/redis.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const bluebird = __webpack_require__(/*! bluebird */ "bluebird");

const redis = __webpack_require__(/*! redis */ "redis");

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

exports.register = async function (server, options) {
  let settings = global.CONFIG.get('web.redisOptions');
  global.client = redis.createClient(settings);
  server.decorate('server', 'redis', global.client);
  server.decorate('request', 'redis', global.client);
  server.expose('client', global.client);
};

exports.name = 'app-redis';
exports.dependencies = 'app-mongo';

/***/ }),

/***/ "./app/models/hanghoa/model.js":
/*!*************************************!*\
  !*** ./app/models/hanghoa/model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = __webpack_require__(/*! ./schema */ "./app/models/hanghoa/schema.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HangHoaSchema = new _mongoose.Schema(_schema.schema, _schema.options);
HangHoaSchema.virtual('ctphieunhaps', {
  ref: 'PhieuNhap',
  localField: '_id',
  foreignField: 'ctPhieuNhaps.item'
});
HangHoaSchema.virtual('ctphieubans', {
  ref: 'PhieuBan',
  localField: '_id',
  foreignField: 'ctPhieuBans.item'
});
exports.default = _mongoose2.default.model('HangHoa', HangHoaSchema);

/***/ }),

/***/ "./app/models/hanghoa/schema.js":
/*!**************************************!*\
  !*** ./app/models/hanghoa/schema.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = exports.schema = undefined;

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const schema = {
  loaiHangHoaID: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'LoaiHangHoa'
  },
  nhaCungCap: [{
    nhaCungCapID: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'NhaCungCap'
    },
    soLuong: Number
  }],
  tenHangHoa: String,
  danhPhap: String,
  donViTinh: String,
  trongLuong: Number,
  tongSoLuong: Number
};
const options = {
  collection: 'hanghoas',
  timestamps: true
};
exports.schema = schema;
exports.options = options;

/***/ }),

/***/ "./app/models/khachhang/model.js":
/*!***************************************!*\
  !*** ./app/models/khachhang/model.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = __webpack_require__(/*! ./schema */ "./app/models/khachhang/schema.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const KhachHangSchema = new _mongoose.Schema(_schema.schema, _schema.options);
KhachHangSchema.virtual('dsphieubans', {
  ref: 'PhieuBan',
  localField: '_id',
  foreignField: 'khachHangID'
});
exports.default = _mongoose2.default.model('KhachHang', KhachHangSchema);

/***/ }),

/***/ "./app/models/khachhang/schema.js":
/*!****************************************!*\
  !*** ./app/models/khachhang/schema.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = exports.schema = undefined;

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _fs = __webpack_require__(/*! fs */ "fs");

const schema = {
  tenKH: String,
  mST: String,
  sDT: String,
  diaChi: String,
  email: String,
  congNo: Number
};
const options = {
  collection: 'khachhangs',
  timestamps: true
};
exports.schema = schema;
exports.options = options;

/***/ }),

/***/ "./app/models/loaihanghoa/model.js":
/*!*****************************************!*\
  !*** ./app/models/loaihanghoa/model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = __webpack_require__(/*! ./schema */ "./app/models/loaihanghoa/schema.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoaiHangHoaSchema = new _mongoose.Schema(_schema.schema, _schema.options);
LoaiHangHoaSchema.virtual('dshanghoas', {
  ref: 'HangHoa',
  localField: '_id',
  foreignField: 'loaiHangHoaID'
});
exports.default = _mongoose2.default.model('LoaiHangHoa', LoaiHangHoaSchema);

/***/ }),

/***/ "./app/models/loaihanghoa/schema.js":
/*!******************************************!*\
  !*** ./app/models/loaihanghoa/schema.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = exports.schema = undefined;

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const schema = {
  tenLoai: String,
  dienGiai: String,
  hinhAnhs: String
};
const options = {
  collection: 'loaihanghoas',
  timestamps: true
};
exports.schema = schema;
exports.options = options;

/***/ }),

/***/ "./app/models/mail/model.js":
/*!**********************************!*\
  !*** ./app/models/mail/model.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = __webpack_require__(/*! ./schema */ "./app/models/mail/schema.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MailSchema = new _mongoose.Schema(_schema.schema, _schema.options);
exports.default = _mongoose2.default.model('Mail', MailSchema);

/***/ }),

/***/ "./app/models/mail/schema.js":
/*!***********************************!*\
  !*** ./app/models/mail/schema.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = exports.schema = undefined;

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const schema = {
  tenNguoiGui: String,
  email: String,
  sDT: String,
  fax: String,
  noiDung: String
};
const options = {
  collection: 'mails',
  timestamps: true
};
exports.schema = schema;
exports.options = options;

/***/ }),

/***/ "./app/models/nhacungcap/model.js":
/*!****************************************!*\
  !*** ./app/models/nhacungcap/model.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = __webpack_require__(/*! ./schema */ "./app/models/nhacungcap/schema.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NhaCungCapSchema = new _mongoose.Schema(_schema.schema, _schema.options);
NhaCungCapSchema.virtual('dsphieunhaps', {
  ref: 'PhieuNhap',
  localField: '_id',
  foreignField: 'nhaCungCapID'
}); // LoaiHangHoaSchema.virtual('dshanghoas',{
//   ref: 'HangHoa',
//   localField: '_id',
//   foreignField: 'loaiHangHoaID',
// })

NhaCungCapSchema.virtual('dsCungCapHangHoas', {
  ref: 'HangHoa',
  localField: '_id',
  foreignField: 'NhaCungCapID'
});
exports.default = _mongoose2.default.model('NhaCungCap', NhaCungCapSchema);

/***/ }),

/***/ "./app/models/nhacungcap/schema.js":
/*!*****************************************!*\
  !*** ./app/models/nhacungcap/schema.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = exports.schema = undefined;

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const schema = {
  tenNCC: String,
  diaChi: String,
  sDT: String,
  hinhAnhs: String
};
const options = {
  collection: 'nhacungcaps',
  timestamps: true
};
exports.schema = schema;
exports.options = options;

/***/ }),

/***/ "./app/models/nhanvien/model.js":
/*!**************************************!*\
  !*** ./app/models/nhanvien/model.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = __webpack_require__(/*! ./schema */ "./app/models/nhanvien/schema.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NhanVienSchema = new _mongoose.Schema(_schema.schema, _schema.options);
NhanVienSchema.virtual('dsphieubans', {
  ref: 'PhieuBan',
  localField: '_id',
  foreignField: 'nhanVienID'
});
exports.default = _mongoose2.default.model('NhanVien', NhanVienSchema);

/***/ }),

/***/ "./app/models/nhanvien/schema.js":
/*!***************************************!*\
  !*** ./app/models/nhanvien/schema.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = exports.schema = undefined;

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _fs = __webpack_require__(/*! fs */ "fs");

const schema = {
  tenNhanVien: String,
  chucVu: String,
  sDT: String,
  luong: Number
};
const options = {
  collection: 'nhanviens',
  timestamps: true
};
exports.schema = schema;
exports.options = options;

/***/ }),

/***/ "./app/models/phieunhap/model.js":
/*!***************************************!*\
  !*** ./app/models/phieunhap/model.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = __webpack_require__(/*! ./schema */ "./app/models/phieunhap/schema.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PhieuNhapSchema = new _mongoose.Schema(_schema.schema, _schema.options);
exports.default = _mongoose2.default.model('PhieuNhap', PhieuNhapSchema);

/***/ }),

/***/ "./app/models/phieunhap/schema.js":
/*!****************************************!*\
  !*** ./app/models/phieunhap/schema.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = exports.schema = undefined;

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _fs = __webpack_require__(/*! fs */ "fs");

const schema = {
  tenPhieu: String,
  ngayLap: {
    type: Date,
    default: Date.now()
  },
  thanhTien: Number,
  nhaCungCapID: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'NhaCungCap'
  },
  ctPhieuNhaps: [{
    item: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'HangHoa'
    },
    donViTinh: String,
    soLuong: Number,
    donGia: Number
  }]
};
const options = {
  collection: 'phieunhapds',
  timestamps: true
};
exports.schema = schema;
exports.options = options;

/***/ }),

/***/ "./app/models/taikhoan/model.js":
/*!**************************************!*\
  !*** ./app/models/taikhoan/model.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = __webpack_require__(/*! ./schema */ "./app/models/taikhoan/schema.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TaiKhoanSchema = new _mongoose.Schema(_schema.schema, _schema.options);
exports.default = _mongoose2.default.model('TaiKhoan', TaiKhoanSchema);

/***/ }),

/***/ "./app/models/taikhoan/schema.js":
/*!***************************************!*\
  !*** ./app/models/taikhoan/schema.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = exports.schema = undefined;

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const schema = {
  tenTK: String,
  matKhau: String
};
const options = {
  collection: 'taikhoans',
  timestamps: true
};
exports.schema = schema;
exports.options = options;

/***/ }),

/***/ "./app/modules/admin/hanghoa/controller/index.js":
/*!*******************************************************!*\
  !*** ./app/modules/admin/hanghoa/controller/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _boom = __webpack_require__(/*! boom */ "boom");

var _boom2 = _interopRequireDefault(_boom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HangHoa = _mongoose2.default.model('HangHoa');

const save = async (request, h) => {
  try {
    let data = request.payload; //--------------------------------------------------------------------------

    let item;

    if (!data._id) {
      item = new HangHoa(data);
      await item.save();
    } else {
      item = await HangHoa.findByIdAndUpdate(data._id, {
        loaiHangHoaID: data.loaiHangHoaID._id,
        tenHangHoa: data.tenHangHoa,
        danhPhap: data.danhPhap,
        donViTinh: data.donViTinh,
        trongLuong: data.trongLuong,
        tongSoLuong: data.tongSoLuong
      });
    } // console.log('da', data);


    return item;
  } catch (error) {
    throw error;
  }
};

const getLoaiHangHoaByHangHoa = async (request, h) => {
  try {
    let data = request.payload;

    let dsHangHoa = (await HangHoa.find({
      _id: data.idMatHang
    }).populate(['loaiHangHoaID']).lean()) || _boom2.default.notFound();

    console.log('da', dsHangHoa);
    return dsHangHoa; //  return newHangHoa
  } catch (err) {
    return _boom2.default.forbidden(err);
  }
};

const getHangHoaByNCCvaLoaiHang = async (request, h) => {
  try {
    let data = request.payload; // let hanghoa = {tenHangHoa:'thep',danhPhap:'a',donViTinh:'ký',trongLuong:'10',tongSoLuong:100,nhaCungCapID:[data.idNCC],loaiHangHoaID: data.idLoaiHang}
    // let newHangHoa = new HangHoa(hanghoa)
    // await newHangHoa.save()
    // let hanghoa = {tenHangHoa:'thep',danhPhap:'a',donViTinh:'ký',trongLuong:'10',tongSoLuong:100,nhaCungCap:[{nhaCungCapID:data.idNCC, soLuong:20}],loaiHangHoaID: data.idLoaiHang}
    // let newHangHoa = new HangHoa(hanghoa)
    // await newHangHoa.save()

    let dsHangHoa = (await HangHoa.find({
      'nhaCungCap.nhaCungCapID': data.idNCC,
      loaiHangHoaID: data.idLoaiHang
    }).populate(['nhaCungCap.nhaCungCapID', 'loaiHangHoaID']).lean()) || _boom2.default.notFound();

    console.log('da', dsHangHoa);
    return dsHangHoa; //  return newHangHoa
  } catch (err) {
    return _boom2.default.forbidden(err);
  }
};

const getHangHoaByNCC = async (request, h) => {
  try {
    let data = request.payload; // let hanghoa = {tenHangHoa:'thep',danhPhap:'a',donViTinh:'ký',trongLuong:'10',tongSoLuong:100,nhaCungCapID:[data.idNCC],loaiHangHoaID: data.idLoaiHang}
    // let newHangHoa = new HangHoa(hanghoa)
    // await newHangHoa.save()
    // let hanghoa = {tenHangHoa:'thep',danhPhap:'a',donViTinh:'ký',trongLuong:'10',tongSoLuong:100,nhaCungCap:[{nhaCungCapID:data.idNCC, soLuong:20}],loaiHangHoaID: data.idLoaiHang}
    // let newHangHoa = new HangHoa(hanghoa)
    // await newHangHoa.save()

    let dsHangHoa = (await HangHoa.find({
      'nhaCungCap.nhaCungCapID': data.idNCC
    }).populate(['nhaCungCap.nhaCungCapID']).lean()) || _boom2.default.notFound();

    console.log('da', dsHangHoa);
    return dsHangHoa; //  return newHangHoa
  } catch (err) {
    return _boom2.default.forbidden(err);
  }
};

const getHangHoa = async (request, h) => {
  try {
    // let data = request.payload
    // let hanghoa = {tenHangHoa:'thep',danhPhap:'a',donViTinh:'ký',trongLuong:'10',tongSoLuong:100,nhaCungCap:[{nhaCungCapID:data.idNCC, soLuong:20}],loaiHangHoaID: data.idLoaiHang}
    // let newHangHoa = new HangHoa(hanghoa)
    // await newHangHoa.save()
    let dsHangHoa = (await HangHoa.find().populate(['loaiHangHoaID']).lean()) || _boom2.default.notFound();

    return dsHangHoa; //  return newHangHoa
  } catch (err) {
    return _boom2.default.forbidden(err);
  }
};

const Delete = async (request, h) => {
  return await HangHoa.findOneAndRemove({
    _id: request.params.id
  });
};

const getHangHoaByid = async (request, h) => {
  return await HangHoa.findById({
    _id: request.params.id
  });
};

exports.default = {
  getHangHoaByNCCvaLoaiHang,
  getHangHoaByNCC,
  getHangHoa,
  Delete,
  getHangHoaByid,
  save,
  getLoaiHangHoaByHangHoa
};

/***/ }),

/***/ "./app/modules/admin/hanghoa/index.js":
/*!********************************************!*\
  !*** ./app/modules/admin/hanghoa/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ./routes/index.js */ "./app/modules/admin/hanghoa/routes/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.register = async (server, option) => {
  server.route(_index2.default);
};

exports.name = 'admin-hanghoa';

/***/ }),

/***/ "./app/modules/admin/hanghoa/routes/index.js":
/*!***************************************************!*\
  !*** ./app/modules/admin/hanghoa/routes/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../validate/index.js */ "./app/modules/admin/hanghoa/validate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../controller/index.js */ "./app/modules/admin/hanghoa/controller/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  method: 'POST',
  path: '/get-hanghoa-bynccvaloaihang',
  handler: _index4.default.getHangHoaByNCCvaLoaiHang,
  config: {
    validate: _index2.default.byNCCvaLoaiHang,
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'POST',
  path: '/get-hanghoa-byncc',
  handler: _index4.default.getHangHoaByNCC,
  config: {
    validate: _index2.default.byNCC,
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'DELETE',
  path: '/delete-hanghoa',
  handler: _index4.default.Delete,
  config: {
    validate: _index2.default.byidvadelete,
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'POST',
  path: '/get-hanghoa-byid',
  handler: _index4.default.getHangHoaByid,
  config: {
    validate: _index2.default.byidvadelete,
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'GET',
  path: '/get-hanghoa',
  handler: _index4.default.getHangHoa,
  config: {
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'POST',
  path: '/hanghoa',
  handler: _index4.default.save,
  config: {
    validate: _index2.default.save,
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'POST',
  path: '/hanghoavsloaihang',
  handler: _index4.default.getLoaiHangHoaByHangHoa,
  config: {
    validate: _index2.default.byMatHangvaLoaiHang,
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}];

/***/ }),

/***/ "./app/modules/admin/hanghoa/validate/index.js":
/*!*****************************************************!*\
  !*** ./app/modules/admin/hanghoa/validate/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = __webpack_require__(/*! joi */ "joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_joi2.default.ObjectId = __webpack_require__(/*! joi-objectid */ "joi-objectid")(_joi2.default);
const hangHoaVal = {
  byNCCvaLoaiHang: {
    payload: {
      idNCC: _joi2.default.ObjectId().required(),
      idLoaiHang: _joi2.default.ObjectId().required()
    }
  },
  byMatHangvaLoaiHang: {
    payload: {
      idMatHang: _joi2.default.ObjectId().required()
    }
  },
  byNCC: {
    payload: {
      idNCC: _joi2.default.ObjectId().required()
    }
  },
  byidvadelete: {
    payload: {
      id: _joi2.default.ObjectId().required()
    }
  },
  save: {
    payload: {
      _id: _joi2.default.ObjectId(),
      loaiHangHoaID: _joi2.default.object().required(),
      tenHangHoa: _joi2.default.string().required(),
      danhPhap: _joi2.default.string().required(),
      donViTinh: _joi2.default.string().required(),
      trongLuong: _joi2.default.number().required(),
      tongSoLuong: _joi2.default.number()
    },
    options: {
      allowUnknown: true
    }
  },
  options: {
    allowUnknown: true
  }
};
exports.default = hangHoaVal;

/***/ }),

/***/ "./app/modules/admin/khachhang/controller/index.js":
/*!*********************************************************!*\
  !*** ./app/modules/admin/khachhang/controller/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const KhachHang = _mongoose2.default.model('KhachHang');

const save = async (request, h) => {
  try {
    let data = request.payload; // //tách img bên payload form thành image và base64
    // let base64 = data && data.hinhAnhs && data.hinhAnhs.imageURL
    // //convert base64 to image------------------------------------------------
    // if (base64 && base64.match(/data(.*?)base64,/)) {
    //     // data.hinhAnhs.imageURL = "app/lib/img/" + data.hinhAnhs.image
    //     let base64Data = base64.replace(/data(.*?)base64,/, "");
    //     require("fs").writeFile("app/lib/img/" + data.hinhAnhs.image, base64Data, 'base64', function (err) {
    //     });
    //     data.hinhAnhs = data.hinhAnhs.image
    //}
    //--------------------------------------------------------------------------

    let item;

    if (!data._id) {
      item = await KhachHang.create(data);
    } else {
      item = await KhachHang.findByIdAndUpdate(data._id, {
        tenKH: data.tenKH,
        mST: data.mST,
        sDT: data.sDT,
        diaChi: data.diaChi,
        email: data.email,
        congNo: data.congNo
      });
    }

    return item;
  } catch (error) {
    throw error;
  }
};

const Delete = async (request, h) => {
  return await KhachHang.findOneAndRemove({
    _id: request.params.id
  });
};

const get = async (request, h) => {
  return await KhachHang.find();
};

const getByid = async (request, h) => {
  return await KhachHang.findById({
    _id: request.params.id
  });
};

exports.default = {
  save,
  get,
  getByid,
  Delete
};

/***/ }),

/***/ "./app/modules/admin/khachhang/index.js":
/*!**********************************************!*\
  !*** ./app/modules/admin/khachhang/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ./routes/index.js */ "./app/modules/admin/khachhang/routes/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.register = async (server, option) => {
  server.route(_index2.default);
};

exports.name = 'admin-khachhang';

/***/ }),

/***/ "./app/modules/admin/khachhang/routes/index.js":
/*!*****************************************************!*\
  !*** ./app/modules/admin/khachhang/routes/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../controller/index.js */ "./app/modules/admin/khachhang/controller/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../validate/index.js */ "./app/modules/admin/khachhang/validate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  method: 'POST',
  path: '/khachhang',
  handler: _index2.default.save,
  config: {
    validate: _index4.default.save,
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'GET',
  path: '/get-khachhang',
  handler: _index2.default.get,
  config: {
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, // {
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
  handler: _index2.default.getByid,
  config: {
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'DELETE',
  path: '/delete-khachhang/{id}',
  handler: _index2.default.Delete
}];

/***/ }),

/***/ "./app/modules/admin/khachhang/validate/index.js":
/*!*******************************************************!*\
  !*** ./app/modules/admin/khachhang/validate/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(/*! path */ "path");

//muon dung object thi Joi phai khai bao la const chu k import
//neu import phai nho lenh
const Joi = __webpack_require__(/*! joi */ "joi");

Joi.objectId = __webpack_require__(/*! joi-objectid */ "joi-objectid")(Joi);
const KhachHangVal = {
  save: {
    payload: {
      _id: Joi.string(),
      tenKH: Joi.string().required(),
      mST: Joi.string(),
      sDT: Joi.string().required(),
      diaChi: Joi.string().required(),
      email: Joi.string().required(),
      congNo: Joi.number()
    }
  },
  options: {
    allowUnknown: true
  }
};
exports.default = { ...KhachHangVal
};

/***/ }),

/***/ "./app/modules/admin/loaihanghoa/controller/index.js":
/*!***********************************************************!*\
  !*** ./app/modules/admin/loaihanghoa/controller/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoaiHangHoa = _mongoose2.default.model('LoaiHangHoa');

const save = async (request, h) => {
  try {
    let data = request.payload;
    console.log('data', data); //tách img bên payload form thành image và base64

    let base64 = data && data.hinhAnhs && data.hinhAnhs.imageUrl; //convert base64 to image------------------------------------------------

    if (base64 && base64.match(/data(.*?)base64,/)) {
      // data.hinhAnhs.imageURL = "app/lib/img/" + data.hinhAnhs.image
      let base64Data = base64.replace(/data(.*?)base64,/, "");

      __webpack_require__(/*! fs */ "fs").writeFile("app/lib/img/" + data.hinhAnhs.image, base64Data, 'base64', function (err) {});

      data.hinhAnhs = data.hinhAnhs.image;
    } //--------------------------------------------------------------------------


    let item;

    if (!data._id) {
      item = await LoaiHangHoa.create(data);
    } else {
      item = await LoaiHangHoa.findByIdAndUpdate(data._id, {
        tenLoai: data.tenLoai,
        dienGiai: data.dienGiai,
        hinhAnhs: data.hinhAnhs
      });
    }

    return item;
  } catch (error) {
    throw error;
  }
};

const Delete = async (request, h) => {
  return await LoaiHangHoa.findOneAndRemove({
    _id: request.params.id
  });
};

const get = async (request, h) => {
  return await LoaiHangHoa.find();
};

const getByid = async (request, h) => {
  return await LoaiHangHoa.findById({
    _id: request.params.id
  });
};

exports.default = {
  save,
  get,
  getByid,
  Delete
};

/***/ }),

/***/ "./app/modules/admin/loaihanghoa/index.js":
/*!************************************************!*\
  !*** ./app/modules/admin/loaihanghoa/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ./routes/index.js */ "./app/modules/admin/loaihanghoa/routes/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.register = async (server, option) => {
  server.route(_index2.default);
};

exports.name = 'admin-loaihanghoa';

/***/ }),

/***/ "./app/modules/admin/loaihanghoa/routes/index.js":
/*!*******************************************************!*\
  !*** ./app/modules/admin/loaihanghoa/routes/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../controller/index.js */ "./app/modules/admin/loaihanghoa/controller/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../validate/index.js */ "./app/modules/admin/loaihanghoa/validate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  method: 'POST',
  path: '/loaihanghoa',
  handler: _index2.default.save,
  config: {
    validate: _index4.default.save,
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'GET',
  path: '/get-loaihanghoa',
  handler: _index2.default.get,
  config: {
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'GET',
  path: '/image/{img}',
  handler: function (request, h) {
    try {
      return h.file('app/lib/img/' + request.params.img);
    } catch (err) {}
  }
}, {
  method: 'GET',
  path: '/getbyid-loaihanghoa/{id}',
  handler: _index2.default.getByid,
  config: {
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'DELETE',
  path: '/delete-loaihanghoa/{id}',
  handler: _index2.default.Delete
}];

/***/ }),

/***/ "./app/modules/admin/loaihanghoa/validate/index.js":
/*!*********************************************************!*\
  !*** ./app/modules/admin/loaihanghoa/validate/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(/*! path */ "path");

//muon dung object thi Joi phai khai bao la const chu k import
//neu import phai nho lenh
const Joi = __webpack_require__(/*! joi */ "joi");

Joi.objectId = __webpack_require__(/*! joi-objectid */ "joi-objectid")(Joi);
const LoaiHangHoaVal = {
  save: {
    payload: {
      _id: Joi.string(),
      tenLoai: Joi.string().required(),
      dienGiai: Joi.string().required(),
      hinhAnhs: Joi.object().required()
    }
  },
  options: {
    allowUnknown: true
  }
};
exports.default = { ...LoaiHangHoaVal
};

/***/ }),

/***/ "./app/modules/admin/nhacungcap/controller/index.js":
/*!**********************************************************!*\
  !*** ./app/modules/admin/nhacungcap/controller/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NhaCungCap = _mongoose2.default.model('NhaCungCap');

const save = async (request, h) => {
  try {
    let data = request.payload;
    console.log('data', data); //tách img bên payload form thành image và base64

    let base64 = data && data.hinhAnhs && data.hinhAnhs.imageUrl; //convert base64 to image------------------------------------------------

    if (base64 && base64.match(/data(.*?)base64,/)) {
      // data.hinhAnhs.imageURL = "app/lib/img/" + data.hinhAnhs.image
      let base64Data = base64.replace(/data(.*?)base64,/, "");

      __webpack_require__(/*! fs */ "fs").writeFile("app/lib/img/" + data.hinhAnhs.image, base64Data, 'base64', function (err) {});

      data.hinhAnhs = data.hinhAnhs.image;
    } //--------------------------------------------------------------------------


    let item;

    if (!data._id) {
      item = await NhaCungCap.create(data);
    } else {
      item = await NhaCungCap.findByIdAndUpdate(data._id, {
        tenNCC: data.tenNCC,
        diaChi: data.diaChi,
        sDT: data.sDT,
        hinhAnhs: data.hinhAnhs
      });
    }

    return item;
  } catch (error) {
    throw error;
  }
};

const Delete = async (request, h) => {
  return await NhaCungCap.findOneAndRemove({
    _id: request.params.id
  });
}; // const get = async (request, h) =>{
//     return await NhaCungCap.find()
// }


const get = async (request, h) => {
  return await NhaCungCap.find();
};

const getByid = async (request, h) => {
  return await NhaCungCap.findById({
    _id: request.params.id
  });
};

exports.default = {
  save,
  get,
  getByid,
  Delete
};

/***/ }),

/***/ "./app/modules/admin/nhacungcap/index.js":
/*!***********************************************!*\
  !*** ./app/modules/admin/nhacungcap/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ./routes/index.js */ "./app/modules/admin/nhacungcap/routes/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.register = async (server, option) => {
  server.route(_index2.default);
};

exports.name = 'admin-nhacungcap';

/***/ }),

/***/ "./app/modules/admin/nhacungcap/routes/index.js":
/*!******************************************************!*\
  !*** ./app/modules/admin/nhacungcap/routes/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../controller/index.js */ "./app/modules/admin/nhacungcap/controller/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../validate/index.js */ "./app/modules/admin/nhacungcap/validate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  method: 'POST',
  path: '/nhacungcap',
  handler: _index2.default.save,
  config: {
    validate: _index4.default.save,
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'GET',
  path: '/get-nhacungcap',
  handler: _index2.default.get,
  config: {
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'GET',
  path: '/getbyid-nhacungcap/{id}',
  handler: _index2.default.getByid,
  config: {
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'DELETE',
  path: '/delete-nhacungcap/{id}',
  handler: _index2.default.Delete
}];

/***/ }),

/***/ "./app/modules/admin/nhacungcap/validate/index.js":
/*!********************************************************!*\
  !*** ./app/modules/admin/nhacungcap/validate/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //muon dung object thi Joi phai khai bao la const chu k import
//neu import phai nho lenh

Object.defineProperty(exports, "__esModule", {
  value: true
});

const Joi = __webpack_require__(/*! joi */ "joi");

Joi.objectId = __webpack_require__(/*! joi-objectid */ "joi-objectid")(Joi);
const NhaCungCapVal = {
  save: {
    payload: {
      _id: Joi.string(),
      tenNCC: Joi.string().required(),
      diaChi: Joi.string().required(),
      sDT: Joi.string().required(),
      hinhAnhs: Joi.object().required()
    }
  },
  options: {
    allowUnknown: true
  }
};
exports.default = { ...NhaCungCapVal
};

/***/ }),

/***/ "./app/modules/admin/nhanvien/controller/index.js":
/*!********************************************************!*\
  !*** ./app/modules/admin/nhanvien/controller/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NhanVien = _mongoose2.default.model('NhanVien');

const save = async (request, h) => {
  try {
    let data = request.payload; // //tách img bên payload form thành image và base64
    // let base64 = data && data.hinhAnhs && data.hinhAnhs.imageURL
    // //convert base64 to image------------------------------------------------
    // if (base64 && base64.match(/data(.*?)base64,/)) {
    //     // data.hinhAnhs.imageURL = "app/lib/img/" + data.hinhAnhs.image
    //     let base64Data = base64.replace(/data(.*?)base64,/, "");
    //     require("fs").writeFile("app/lib/img/" + data.hinhAnhs.image, base64Data, 'base64', function (err) {
    //     });
    //     data.hinhAnhs = data.hinhAnhs.image
    //}
    //--------------------------------------------------------------------------

    let item;

    if (!data._id) {
      item = await NhanVien.create(data);
    } else {
      item = await NhanVien.findByIdAndUpdate(data._id, {
        tenNhanVien: data.tenNhanVien,
        chucVu: data.chucVu,
        sDT: data.sDT,
        luong: data.luong
      });
    }

    return item;
  } catch (error) {
    throw error;
  }
};

const Delete = async (request, h) => {
  return await NhanVien.findOneAndRemove({
    _id: request.params.id
  });
};

const get = async (request, h) => {
  return await NhanVien.find();
};

const getByid = async (request, h) => {
  return await NhanVien.findById({
    _id: request.params.id
  });
};

exports.default = {
  save,
  get,
  getByid,
  Delete
};

/***/ }),

/***/ "./app/modules/admin/nhanvien/index.js":
/*!*********************************************!*\
  !*** ./app/modules/admin/nhanvien/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ./routes/index.js */ "./app/modules/admin/nhanvien/routes/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.register = async (server, option) => {
  server.route(_index2.default);
};

exports.name = 'admin-nhanvien';

/***/ }),

/***/ "./app/modules/admin/nhanvien/routes/index.js":
/*!****************************************************!*\
  !*** ./app/modules/admin/nhanvien/routes/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../controller/index.js */ "./app/modules/admin/nhanvien/controller/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../validate/index.js */ "./app/modules/admin/nhanvien/validate/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  method: 'POST',
  path: '/nhanvien',
  handler: _index2.default.save,
  config: {
    validate: _index4.default.save,
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'GET',
  path: '/get-nhanvien',
  handler: _index2.default.get,
  config: {
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, // {
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
  handler: _index2.default.getByid,
  config: {
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'DELETE',
  path: '/delete-nhanvien/{id}',
  handler: _index2.default.Delete
}];

/***/ }),

/***/ "./app/modules/admin/nhanvien/validate/index.js":
/*!******************************************************!*\
  !*** ./app/modules/admin/nhanvien/validate/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(/*! path */ "path");

//muon dung object thi Joi phai khai bao la const chu k import
//neu import phai nho lenh
const Joi = __webpack_require__(/*! joi */ "joi");

Joi.objectId = __webpack_require__(/*! joi-objectid */ "joi-objectid")(Joi);
const NhanVienVal = {
  save: {
    payload: {
      _id: Joi.string(),
      tenNhanVien: Joi.string().required(),
      chucVu: Joi.string().required(),
      sDT: Joi.string().required(),
      luong: Joi.number().required()
    }
  },
  options: {
    allowUnknown: true
  }
};
exports.default = { ...NhanVienVal
};

/***/ }),

/***/ "./app/modules/admin/phieunhap/controller/index.js":
/*!*********************************************************!*\
  !*** ./app/modules/admin/phieunhap/controller/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _boom = __webpack_require__(/*! boom */ "boom");

var _boom2 = _interopRequireDefault(_boom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PhieuNhap = _mongoose2.default.model('PhieuNhap');

const save = async (request, h) => {
  try {
    let data = request.payload; //--------------------------------------------------------------------------

    let item;

    if (!data._id) {
      item = new PhieuNhap(data);
      await item.save();
    } else {
      item = await PhieuNhap.findByIdAndUpdate(data._id, {
        tenPhieu: data.tenPhieu,
        ngayLap: data.ngayLap,
        nhaCungCapID: data.nhaCungCapID._id,
        thanhTien: data.thanhTien
      });
    } // console.log('da', data);


    return item;
  } catch (error) {
    throw error;
  }
};

const getPhieuNhapByNCC = async (request, h) => {
  try {
    let data = request.payload; // let PhieuNhap = {tenPhieuNhap:'thep',danhPhap:'a',donViTinh:'ký',trongLuong:'10',tongSoLuong:100,nhaCungCapID:[data.idNCC],loaiPhieuNhapID: data.idLoaiHang}
    // let newPhieuNhap = new PhieuNhap(PhieuNhap)
    // await newPhieuNhap.save()
    // let PhieuNhap = {tenPhieuNhap:'thep',danhPhap:'a',donViTinh:'ký',trongLuong:'10',tongSoLuong:100,nhaCungCap:[{nhaCungCapID:data.idNCC, soLuong:20}],loaiPhieuNhapID: data.idLoaiHang}
    // let newPhieuNhap = new PhieuNhap(PhieuNhap)
    // await newPhieuNhap.save()

    let dsPhieuNhap = (await PhieuNhap.find({
      'nhaCungCap.nhaCungCapID': data.idNCC
    }).populate(['nhaCungCap.nhaCungCapID']).lean()) || _boom2.default.notFound();

    console.log('da', dsPhieuNhap);
    return dsPhieuNhap; //  return newPhieuNhap
  } catch (err) {
    return _boom2.default.forbidden(err);
  }
};

const getPhieuNhap = async (request, h) => {
  try {
    let dsPhieuNhap = (await PhieuNhap.find().populate(['nhaCungCapID']).lean()) || _boom2.default.notFound();

    return dsPhieuNhap;
  } catch (err) {
    return _boom2.default.forbidden(err);
  }
};

const Delete = async (request, h) => {
  return await PhieuNhap.findOneAndRemove({
    _id: request.params.id
  });
};

const getPhieuNhapByid = async (request, h) => {
  return await PhieuNhap.findById({
    _id: request.params.id
  });
};

exports.default = {
  getPhieuNhapByNCC,
  getPhieuNhap,
  Delete,
  getPhieuNhapByid,
  save
};

/***/ }),

/***/ "./app/modules/admin/phieunhap/index.js":
/*!**********************************************!*\
  !*** ./app/modules/admin/phieunhap/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ./routes/index.js */ "./app/modules/admin/phieunhap/routes/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.register = async (server, option) => {
  server.route(_index2.default);
};

exports.name = 'admin-phieunhap';

/***/ }),

/***/ "./app/modules/admin/phieunhap/routes/index.js":
/*!*****************************************************!*\
  !*** ./app/modules/admin/phieunhap/routes/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../validate/index.js */ "./app/modules/admin/phieunhap/validate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../controller/index.js */ "./app/modules/admin/phieunhap/controller/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  method: 'POST',
  path: '/get-phieunhap-byncc',
  handler: _index4.default.getPhieuNhapByNCC,
  config: {
    // validate: phieuNhapVal.byNCC,
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'DELETE',
  path: '/delete-phieunhap',
  handler: _index4.default.Delete,
  config: {
    // validate: phieuNhapVal.byidvadelete,
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'POST',
  path: '/get-phieunhap-byid',
  handler: _index4.default.getPhieuNhapByid,
  config: {
    // validate: phieuNhapVal.byidvadelete,
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'GET',
  path: '/get-phieunhap',
  handler: _index4.default.getPhieuNhap,
  config: {
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'POST',
  path: '/phieunhap',
  handler: _index4.default.save,
  config: {
    validate: _index2.default.save,
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}];

/***/ }),

/***/ "./app/modules/admin/phieunhap/validate/index.js":
/*!*******************************************************!*\
  !*** ./app/modules/admin/phieunhap/validate/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = __webpack_require__(/*! joi */ "joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_joi2.default.ObjectId = __webpack_require__(/*! joi-objectid */ "joi-objectid")(_joi2.default);
const phieuNhapVal = {
  save: {
    payload: {
      _id: _joi2.default.string(),
      tenPhieu: _joi2.default.string().required(),
      ngayLap: _joi2.default.date().required(),
      nhaCungCapID: _joi2.default.object().required(),
      thanhTien: _joi2.default.number()
    }
  },
  options: {
    allowUnknown: true
  }
};
exports.default = phieuNhapVal;

/***/ }),

/***/ "./app/modules/mail/controller/index.js":
/*!**********************************************!*\
  !*** ./app/modules/mail/controller/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _boom = __webpack_require__(/*! boom */ "boom");

var _boom2 = _interopRequireDefault(_boom);

var _mail = __webpack_require__(/*! ../../../lib/mail.js */ "./app/lib/mail.js");

var _mail2 = _interopRequireDefault(_mail);

var _mailLienHe = __webpack_require__(/*! ../../../lib/mailLienHe.js */ "./app/lib/mailLienHe.js");

var _mailLienHe2 = _interopRequireDefault(_mailLienHe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Mail = _mongoose2.default.model('Mail');

const sendMail = async (req, h) => {
  try {
    let data = req.payload;
    let item;

    if (!data._id) {
      item = new Mail(data);
      await item.save();
    }

    let options = {
      subject: 'Hello',
      text: 'Hello',
      content: await _mailLienHe2.default.mailLienHe(data)
    };
    await _mail2.default.sendMail(options);
    return item;
  } catch (error) {
    return _boom2.default.forbidden(error);
  }
};

exports.default = {
  sendMail
};

/***/ }),

/***/ "./app/modules/mail/index.js":
/*!***********************************!*\
  !*** ./app/modules/mail/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ./routes/index.js */ "./app/modules/mail/routes/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.register = async (server, option) => {
  server.route(_index2.default);
};

exports.name = 'mail';

/***/ }),

/***/ "./app/modules/mail/routes/index.js":
/*!******************************************!*\
  !*** ./app/modules/mail/routes/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../validate/index.js */ "./app/modules/mail/validate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../controller/index.js */ "./app/modules/mail/controller/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  method: 'POST',
  path: '/mail',
  handler: _index4.default.sendMail,
  config: {
    validate: _index2.default.sendMail,
    tags: ['api'],
    auth: false,
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad Request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}];

/***/ }),

/***/ "./app/modules/mail/validate/index.js":
/*!********************************************!*\
  !*** ./app/modules/mail/validate/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = __webpack_require__(/*! joi */ "joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_joi2.default.ObjectId = __webpack_require__(/*! joi-objectid */ "joi-objectid")(_joi2.default);
const hangHoaVal = {
  sendMail: {
    payload: {
      email: _joi2.default.string().required(),
      tenNguoiGui: _joi2.default.string().required(),
      noiDung: _joi2.default.string().required(),
      sDT: _joi2.default.string().required()
    },
    options: {
      allowUnknown: true
    }
  }
};
exports.default = hangHoaVal;

/***/ }),

/***/ "./app/modules/users/controller/index.js":
/*!***********************************************!*\
  !*** ./app/modules/users/controller/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _boom = __webpack_require__(/*! boom */ "boom");

var _boom2 = _interopRequireDefault(_boom);

var _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _aguid = __webpack_require__(/*! aguid */ "aguid");

var _aguid2 = _interopRequireDefault(_aguid);

var _http = __webpack_require__(/*! http */ "http");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TaiKhoan = _mongoose2.default.model('TaiKhoan');

const save = async (req, h) => {
  try {
    let data = req.payload;
    let item = new TaiKhoan(data);
    await item.save();
    return item;
  } catch (error) {
    return _boom2.default.forbidden(error);
  }
};

const getDsTaiKhoan = async () => {
  try {
    let dsTaiKhoan = await TaiKhoan.find();
    return dsTaiKhoan;
  } catch (error) {
    return _boom2.default.forbidden(error);
  }
};

const login = async (request, h) => {
  try {
    let data = request.payload;
    let getUser = await TaiKhoan.findOne({
      tenTK: data.tenTK
    });
    let credentials = {};
    let isValid = false;

    if (getUser) {
      credentials = {
        tenTK: getUser.tenTK
      };
      console.log('user', getUser);

      if (data.matKhau === getUser.matKhau) {
        let session = {
          valid: true,
          id: (0, _aguid2.default)(),
          expires: new Date().getTime() + 30 * 60 * 1000,
          credentials
        };
        isValid = true;
        request.server.redis.set(session.id, JSON.stringify(session));

        let token = _jsonwebtoken2.default.sign(session, global.CONFIG.get('web.key'));

        return h.response({
          auth: true,
          credentials,
          isValid,
          token
        }).header('Authorization', token);
      } else {
        return {
          credentials,
          isValid
        };
      }
    } else {
      return {
        credentials,
        isValid
      };
    }
  } catch (err) {
    return _boom2.default.forbidden(err);
  }
};

exports.default = {
  save,
  getDsTaiKhoan,
  login
};

/***/ }),

/***/ "./app/modules/users/index.js":
/*!************************************!*\
  !*** ./app/modules/users/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ./routes/index.js */ "./app/modules/users/routes/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.register = async (server, option) => {
  server.route(_index2.default);
};

exports.name = 'users-login';

/***/ }),

/***/ "./app/modules/users/routes/index.js":
/*!*******************************************!*\
  !*** ./app/modules/users/routes/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../validate/index.js */ "./app/modules/users/validate/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../controller/index.js */ "./app/modules/users/controller/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  method: 'GET',
  path: '/get-taikhoan',
  handler: _index4.default.getDsTaiKhoan,
  config: {
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'POST',
  path: '/taikhoan',
  handler: _index4.default.save,
  config: {
    tags: ['api'],
    validate: _index2.default.save,
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}, {
  method: 'POST',
  path: '/login',
  handler: _index4.default.login,
  config: {
    tags: ['api'],
    validate: _index2.default.login,
    auth: false,
    plugins: {
      'hapi-swagger': {
        responses: {
          '400': {
            'description': 'Bad request'
          }
        },
        payloadType: 'json'
      }
    }
  }
}];

/***/ }),

/***/ "./app/modules/users/validate/index.js":
/*!*********************************************!*\
  !*** ./app/modules/users/validate/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = __webpack_require__(/*! joi */ "joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_joi2.default.ObjectId = __webpack_require__(/*! joi-objectid */ "joi-objectid")(_joi2.default);
const usersVal = {
  save: {
    payload: {
      tenTK: _joi2.default.string().required(),
      matKhau: _joi2.default.string().required()
    }
  },
  login: {
    payload: {
      tenTK: _joi2.default.string().required(),
      matKhau: _joi2.default.string().required()
    }
  }
};
exports.default = usersVal;

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, author, license, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"project-backend","version":"1.0.0","description":"","main":"index.js","scripts":{"start":"npm run build:server:once && npm-run-all --parallel nodemon:prod watch:server","build:server:once":"cross-env NODE_ENV=development webpack --config webpack.config.js","watch:server":"cross-env NODE_ENV=development webpack --inline --progress --config webpack.config.js --watch","nodemon:prod":"cross-env NODE_ENV=development nodemon --inspect build.js"},"author":"","license":"ISC","dependencies":{"aguid":"^2.0.0","bcrypt":"^3.0.6","bluebird":"^3.5.5","boom":"^7.3.0","config":"^3.0.1","hapi":"^17.8.4","hapi-auth-jwt2":"^8.6.1","hapi-pino":"^5.4.1","hapi-swagger":"^9.4.1","inert":"^5.1.2","joi":"^14.3.1","joi-objectid":"^2.0.0","jsonwebtoken":"^8.5.1","lodash":"^4.17.11","mongoose":"^5.4.19","mongoose-paginate":"^5.0.3","nodemailer":"^6.2.1","redis":"^2.8.0","vision":"^5.4.4"},"devDependencies":{"@babel/core":"^7.3.4","babel-loader":"^8.0.5","babel-preset-env":"^1.7.0","cross-env":"^5.2.0","npm-run-all":"^4.1.5","webpack":"^4.29.6","webpack-cli":"^3.2.3","webpack-node-externals":"^1.7.2"}};

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** multi ./app.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Documents\Doantotnghiep\project-backend\app.js */"./app.js");


/***/ }),

/***/ "aguid":
/*!************************!*\
  !*** external "aguid" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aguid");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),

/***/ "boom":
/*!***********************!*\
  !*** external "boom" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("boom");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "hapi":
/*!***********************!*\
  !*** external "hapi" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hapi");

/***/ }),

/***/ "hapi-auth-jwt2":
/*!*********************************!*\
  !*** external "hapi-auth-jwt2" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hapi-auth-jwt2");

/***/ }),

/***/ "hapi-swagger":
/*!*******************************!*\
  !*** external "hapi-swagger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hapi-swagger");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "inert":
/*!************************!*\
  !*** external "inert" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inert");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),

/***/ "joi-objectid":
/*!*******************************!*\
  !*** external "joi-objectid" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("joi-objectid");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-paginate":
/*!************************************!*\
  !*** external "mongoose-paginate" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose-paginate");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),

/***/ "vision":
/*!*************************!*\
  !*** external "vision" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vision");

/***/ })

/******/ });