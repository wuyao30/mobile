import request from './index'

export function queryAllFirstLevel () {
  return request({
    url: '/file/one',
    method: 'get'
  })
}

export function queryAllSecondLevel () {
  return request({
    url: '/file/two',
    method: 'get'
  })
}

export function queryPlayBill (data) {
  return request({
    url: '/bill/playbill',
    method: 'post',
    data
  })
}

export function queryInstruments (data) {
  return request({
    url: '/file/instruments',
    method: 'post',
    data
  })
}

export function updatePalyBill (data) {
  return request({
    url: '/bill/amend',
    method: 'post',
    data
  })
}

export function queryAllPlayMode () {
  return request({
    url: '/play/pattern',
    method: 'get'
  })
}

export function updatePlayMode (data) {
  return request({
    url: '/play/oneclick',
    method: 'post',
    data
  })
}
