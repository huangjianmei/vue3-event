import request from '@/utils/request'

// 注册接口
export const userRegisterService = ({ username, password, repassword }) => {
  return request.post('/api/reg', { username, password, repassword })
}
// 登录接口
export const userLoginService = ({ username, password }) => {
  return request.post('/api/login', { username, password })
}
// 登录接口
export const userGetInfoService = () => {
  return request.get('/my/userinfo')
}
// 更新用户基本信息
export const userUpdateInfoService = ({ id, nickname, username, email }) => {
  return request.put('/my/userinfo', { id, nickname, username, email })
}
export const userUpdateAvatarService = ({ id, avatar }) => {
  return request.patch('/my/update/avatar', { id, avatar })
}
