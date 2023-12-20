/**
 * 添加路由前缀
 * @param {string}} basePath 基础路径
 * @param {router} router 路由实例
 */
export function addBasePath(basePath, router) {
  router.forEach(item => {
    item.path && (item.path = `${basePath}${item.path}`);
    item.redirect && (item.redirect = `${basePath}${item.redirect}`);
    item.children && addBasePath(basePath, item.children);
  });
}