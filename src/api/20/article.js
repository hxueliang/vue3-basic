import request from '@/utils/request';

/**
 * 获取文章分类
 * @returns 
 */
export const acticleTypeAPI = () => request.get('/my/cate/list');

/**
 * 添加文章分类
 * @param {objer} params 表单数据
 * @returns 
 */
export const addActicleTypeAPI = params => request.post('/my/cate/add', params);

/**
 * 编辑文章分类
 * @param {objer} params 表单数据
 * @returns 
 */
export const editActicleTypeAPI = params => request.put('/my/cate/info', params);

/**
 * 删除文章分类
 * @param {objer} params 请求数据
 * @returns 
 */
export const delActicleTypeAPI = params => request.delete('/my/cate/del', { params });
