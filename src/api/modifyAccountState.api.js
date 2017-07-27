import request from 'superagent'
import {host} from '../config/index.js'
export const modifyAccountState = function (query, cb) {
  request
    .post(host + 'franchisee/account/modifyAccountState')
    .send(query)
    .end(function (error, res) {
      cb(error, res)
    })
}
