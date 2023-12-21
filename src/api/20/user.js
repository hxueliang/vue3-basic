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
