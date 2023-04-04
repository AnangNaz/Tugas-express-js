const bcrypt = require('bcrypt')
const UsersModel = require('../models/users')

const passwordCheck = async(nip, password) => {
      // checking nip at db 
      const userData = await UsersModel.findOne({ where: { nip: nip } })
      // decrypt 
      const compare = await bcrypt.compare(password, userData.password)
      return { compare, userData}
}

module.exports = passwordCheck