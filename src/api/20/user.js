import request from '@/utils/request';

/**
 * 注册接口
 * @param {objer} params 表单数据
 * @returns 
 */
export const userRegisterAPI = params => request.post('/api/reg', params);

/**
 * 登录
 * @param {object} params 表单数据
 * @returns 
 */
export const userLoginAPI = params => request.post('/api/login', params);

/**
 * 获取用户的基本信息
 * @returns 
 */
export const userInfoAPI = () => request.get('/my/userinfo');

/**
 * 更新用户信息
 * @param {object} params 表单数据
 * @returns 
 */
export const updateUesrInfoAPI = params => request.put('/my/userinfo', params);

/**
 * 更新用户头像
 * @param {object} params 表单数据
 * @returns 
 */
export const updateUserAvatarAPI = params => request.patch('/my/update/avatar', params);