import request from '@/utils/request'

// 获取文章分类
export const getChannelService = () => {
  return request.get('/my/cate/list')
}

// 添加分类
export const addChannelService = (data) => {
  return request.post('/my/cate/add', data)
}

// 编辑分类
export const editChannelService = (data) => {
  return request.post('/my/cate/info', data)
}

// 删除分类
export const delChannelService = (id) => {
  return request.delete('/my/cate/del', { params: { id } })
}

// 获取文章列表
export const getActicelService = (params) => {
  return request.get('/my/article/list', { params })
}

// 添加文章
// data 需要是一个formData格式对象
export const artPublishService = (data) => {
  return request.post('/my/article/add', data)
}

// 获取文章详情
export const getArticleService = (id) => {
  return request.get('/my/article/info', { params: { id } })
}

// 编辑文章
export const artEditService = (data) => {
  return request.put('/my/article/info', data)
}
