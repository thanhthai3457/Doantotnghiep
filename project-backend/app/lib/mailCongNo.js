
const fs = require('fs')
const path = require('path')
const mailLienHe = async (data) => {
  try {
    let content = fs.readFileSync(path.join(__dirname, 'app', 'lib', 'templateMailCongNo.html'))
    content = String(content)
    console.log('content', content);
    content = content.replace('{{content}}',data.tenNguoiGui)
    return content
  } catch (err) {
    return err
  }
}

export default {
  mailLienHe
}