/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 19:27:15
 * @LastEditTime: 2019-08-19 19:54:06
 * @LastEditors: Please set LastEditors
 */
'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
})
