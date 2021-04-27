module.exports = [
  {
    url: '/bill/playbill',
    type: 'post',
    response: config => {
      return {
        errno: 0,
        data: {
          currentPage: 1,
          pageSize: 20,
          pageTotal: 1,
          recordTotal: 1,
          previousPage: 1,
          nextPage: 1,
          firstPage: 1,
          lastPage: 1,
          content: [
            {
              devid: 2,
              attchids: 7,
              firclaid: 5,
              record: [
                {
                  id: 7,
                  filename: '互联网在工业中的应用',
                  showtitle: '工业互联网',
                  url: 'long.ppt',
                  firstId: 5,
                  secondId: 3,
                  content: 'http://221.6.211.30:8777/test/long.ppt'
                }
              ]
            },
            {
              devid: 3,
              attchids: 7,
              firclaid: 5,
              record: [
                {
                  id: 7,
                  filename: '互联网在工业中的应用',
                  showtitle: '工业互联网',
                  url: 'long.ppt',
                  firstId: 5,
                  secondId: 3,
                  content: 'http://221.6.211.30:8777/test/long.ppt'
                }
              ]
            }
          ]
        }
      }
    }
  },
  {
    url: '/file/one',
    type: 'get',
    response: config => {
      return {
        errno: 0,
        data: [
          {
            id: 1,
            firclaname: '智慧城市'
          },
          {
            id: 2,
            firclaname: '教育文旅'
          },
          {
            id: 3,
            firclaname: '医疗卫生'
          }
        ]
      }
    }
  },
  {
    url: '/file/two',
    type: 'get',
    response: config => {
      return {
        errno: 0,
        data: [
          {
            id: 1,
            secclaname: '图片'
          },
          {
            id: 2,
            secclaname: '视频'
          },
          {
            id: 3,
            secclaname: 'PPT'
          },
          {
            id: 4,
            secclaname: '网址'
          }
        ]
      }
    }
  },
  {
    url: '/file/instruments',
    type: 'post',
    response: config => {
      return {
        errno: 0,
        data: [
          {
            id: 11,
            filename: '职工教育',
            showtitle: '工业互联网',
            url: 'www.sina.com.cn',
            firstId: 5,
            secondId: 1,
            content: 'http://www.sina.com.cn'
          },
          {
            id: 12,
            filename: '职工教育',
            showtitle: '工业互联网',
            url: 'www.baidu.com',
            firstId: 5,
            secondId: 1,
            content: 'http://www.baidu.com'
          }
        ]
      }
    }
  },
  {
    url: '/bill/amend',
    type: 'post',
    response: config => {
      return {
        errno: 0,
        data: '设置成功'
      }
    }
  },
  {
    url: '/play/pattern',
    type: 'get',
    response: config => {
      return {
        errno: 0,
        data: [
          {
            id: 1,
            playmode: 0,
            modename: '自动'
          },
          {
            id: 2,
            playmode: 10,
            modename: '手动'
          }
        ]
      }
    }
  },
  {
    url: '/play/oneclick',
    type: 'post',
    response: config => {
      return {
        errno: 0,
        data: '成功'
      }
    }
  }
]
