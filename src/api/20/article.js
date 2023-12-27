import request from '@/utils/request';

/**
 * 分类：
 */

/**
 * 获取文章分类
 * @returns 
 */
export const acticleTypeAPI = () => request.get('/my/cate/list');

/**
 * 添加文章分类
 * @param {object} params 表单数据
 * @returns 
 */
export const addActicleTypeAPI = params => request.post('/my/cate/add', params);

/**
 * 编辑文章分类
 * @param {object} params 表单数据
 * @returns 
 */
export const editActicleTypeAPI = params => request.put('/my/cate/info', params);

/**
 * 删除文章分类
 * @param {object} params 请求参数
 * @returns 
 */
export const delActicleTypeAPI = params => request.delete('/my/cate/del', { params });

/**
 * 文章：
 */

/**
 * 获取文章列表
 * @param {object} params 请求参数
 * @returns 
 */
export const acticleListAPI = params => request.get('/my/article/list', { params });

/**
 * 获取文章详情
 * @param {object} params 请求参数
 * @returns 
 */
export const getActicleAPI = params => request.get('/my/article/info', { params });

/**
 * 添加文章
 * @param {formData} params 请求参数
 * @returns 
 */
export const addActicleAPI = params => request.post('/my/article/add', params);

/**
 * 编辑文章
 * @param {formData} params 请求参数
 * @returns 
 */
export const editActicleAPI = params => request.put('/my/article/info', params);