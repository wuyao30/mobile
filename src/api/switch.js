import requset from './index'

export function turnOnAllLights () {
  return requset({
    url: 'http://localhost/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight001-1%2Clight002-1%2Clight003-1%2Clight004-1%2Clight005-1%2Clight006-1%2Clight007-1%2Clight008-1%2Clight009-1%2Clight010-1%2Clight011-1',
    method: 'get'
  })
}

export function turnOffAllLights () {
  return requset({
    url: 'http://localhost/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight001-0%2Clight002-0%2Clight003-0%2Clight004-0%2Clight005-0%2Clight006-0%2Clight007-0%2Clight008-0%2Clight009-0%2Clight010-0%2Clight011-0',
    method: 'get'
  })
}

export function turnOnAllPower () {
  return requset({
    url: 'http://localhost/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj001-1%3B%5Bdelay%5D1000%3B%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj002-1%3B%5Bdelay%5D1000%3B%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj003-1%3B%5Bdelay%5D1000%3B%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight012-1%2Clight013-1%2Clight014-1%2Clight015-1%2Clight016-1%2Clight017-1%3B%5Bdelay%5D35000%3B%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dall-1',
    method: 'get'
  })
}

export function turnOffAllPower () {
  return requset({
    url: 'http://localhost/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dall-0%3B%5Bdelay%5D30000%3B%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj001-0%3B%5Bdelay%5D2000%3B%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj002-0%3B%5Bdelay%5D2000%3B%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj003-0%3B%5Bdelay%5D1000%3B%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight012-0%2Clight013-0%2Clight014-0%2Clight015-0%2Clight016-0%2Clight017-0',
    method: 'get'
  })
}

export function ScreenTurnOnAll () {
  return requset({
    url: 'http://localhost/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj001-1%3B%5Bdelay%5D1000%3B%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj002-1%3B%5Bdelay%5D1000%3B%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj003-1%3B%5Bdelay%5D1000%3B%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight012-1%2Clight013-1%2Clight014-1%2Clight015-1%2Clight016-1%2Clight017-1',
    method: 'get'
  })
}

export function ScreenTurnOffAll () {
  return requset({
    url: 'http://localhost/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj001-0%3B%5Bdelay%5D1000%3B%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj002-0%3B%5Bdelay%5D1000%3B%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj003-0%3B%5Bdelay%5D1000%3B%5Btcp%5D%5B192.168.3.100%5D%5Blight%5Dlight012-0%2Clight013-0%2Clight014-0%2Clight015-0%2Clight016-0%2Clight017-0',
    method: 'get'
  })
}

export function DeviceTurnOnAll () {
  return requset({
    url: 'http://localhost/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dall-1',
    method: 'get'
  })
}

export function DeviceTurnOffAll () {
  return requset({
    url: 'http://localhost/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dall-0%3B',
    method: 'get'
  })
}

export function RingTurnOnAll () {
  return requset({
    url: 'http://localhost/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj002-1%3B%5Bdelay%5D3000%3B%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs013-1',
    method: 'get'
  })
}

export function RingTurnOnOff () {
  return requset({
    url: 'http://localhost/control?cmd=%5Btcp%5D%5B192.168.3.100%5D%5Bpcs%5Dpcs013-0%3B%5Bdelay%5D1000%3B%5Btcp%5D%5B192.168.3.100%5D%5Bproj%5Dproj002-0',
    method: 'get'
  })
}
