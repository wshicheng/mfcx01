import request from 'superagent'
import {host} from '../config/index.js'
export const delAccount = function (query, cb) {
  request
    .post(host + 'franchisee/account/delAccount')
    .send(query)
    .end(function (error, res) {
      cb(error, res)
    })
}
