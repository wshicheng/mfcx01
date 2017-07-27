import request from 'superagent'
import {host} from '../config/index.js'
export const updateAccount = function (query, cb) {
  request
    .post(host + 'franchisee/account/updateAccount')
    .send(query)
    .end(function (error, res) {
      cb(error, res)
    })
}
