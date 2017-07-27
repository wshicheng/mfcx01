import request from 'superagent'
import {host} from '../config/index.js'
export const getAllAccount = function (query, currentPage, cb) {
  request
    .post(host + 'franchisee/account/getAllAccount?page=' + currentPage + '&size=10')
    .send(query)
    .end(function (error, res) {
      cb(error, res)
    })
}
