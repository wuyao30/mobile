import request from './index'

export function hallOff () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight001-0',
    method: 'get'
  })
}

export function hallOn () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight001-1',
    method: 'get'
  })
}

export function hallModelingOn () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight002-1',
    method: 'get'
  })
}

export function hallModelingOff () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight002-0',
    method: 'get'
  })
}

export function meetingGateOn () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight003-1',
    method: 'get'
  })
}

export function meetingGateOff () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight003-0',
    method: 'get'
  })
}

export function multiScreenOn () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight004-1',
    method: 'get'
  })
}

export function multiScreenOff () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight004-0',
    method: 'get'
  })
}

export function on5 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight005-1',
    method: 'get'
  })
}

export function off5 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight005-0',
    method: 'get'
  })
}

export function on6 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight006-1',
    method: 'get'
  })
}

export function off6 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight006-0',
    method: 'get'
  })
}

export function on7 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight007-1',
    method: 'get'
  })
}

export function off7 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight007-0',
    method: 'get'
  })
}

export function on8 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight008-1',
    method: 'get'
  })
}

export function off8 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight008-0',
    method: 'get'
  })
}

export function on9 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight009-1',
    method: 'get'
  })
}

export function off9 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight009-0',
    method: 'get'
  })
}

export function on10 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight011-1%2Clight010-1',
    method: 'get'
  })
}

export function off10 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight011-0%2Clight010-0',
    method: 'get'
  })
}

export function on11 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj001-1',
    method: 'get'
  })
}

export function off11 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj001-0',
    method: 'get'
  })
}

export function on12 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj002-1',
    method: 'get'
  })
}

export function off12 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj002-0',
    method: 'get'
  })
}

export function on13 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj003-1',
    method: 'get'
  })
}

export function off13 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj003-0',
    method: 'get'
  })
}

export function on14 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight012-1',
    method: 'get'
  })
}

export function off14 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight012-0',
    method: 'get'
  })
}

export function on15 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight013-1%2Clight014-1',
    method: 'get'
  })
}

export function off15 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight013-0%2Clight014-0',
    method: 'get'
  })
}

export function on16 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight017-1',
    method: 'get'
  })
}

export function off16 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight017-0',
    method: 'get'
  })
}

export function on17 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight015-1',
    method: 'get'
  })
}

export function off17 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight015-0',
    method: 'get'
  })
}

export function on18 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight016-1',
    method: 'get'
  })
}

export function off18 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight016-0',
    method: 'get'
  })
}

export function on19 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs006-1',
    method: 'get'
  })
}

export function off19 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs006-0',
    method: 'get'
  })
}

export function on20 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs018-1',
    method: 'get'
  })
}

export function off20 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs018-0',
    method: 'get'
  })
}

export function on21 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs019-1',
    method: 'get'
  })
}

export function off21 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs019-0',
    method: 'get'
  })
}

export function on22 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs020-1',
    method: 'get'
  })
}

export function off22 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs020-0',
    method: 'get'
  })
}

export function on23 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs021-1',
    method: 'get'
  })
}

export function off23 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs021-0',
    method: 'get'
  })
}

export function on24 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs022-1',
    method: 'get'
  })
}

export function off24 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs022-0',
    method: 'get'
  })
}

export function on25 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs014-1',
    method: 'get'
  })
}

export function off25 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs014-0',
    method: 'get'
  })
}

export function on26 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight015-1',
    method: 'get'
  })
}

export function off26 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight015-0',
    method: 'get'
  })
}

export function on27 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs017-1',
    method: 'get'
  })
}

export function off27 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs017-0',
    method: 'get'
  })
}

export function on28 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs009-1',
    method: 'get'
  })
}

export function off28 () {
  return request({
    url: 'http://192.168.3.100/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs009-0',
    method: 'get'
  })
}
