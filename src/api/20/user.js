import request from '@/utils/request';

/**
 * 注册接口
 * @param {objer} params 表单数据
 * @returns 
 */
export const userRegisterAPI = params => request.post('/api/reg', params);
