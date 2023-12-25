import request from '@/utils/request';

/**
 * 获取文章分类
 * @returns 
 */
export const acticleTypeAPI = () => request.get('/my/cate/list');