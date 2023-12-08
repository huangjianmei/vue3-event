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
