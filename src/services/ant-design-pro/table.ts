import request from 'umi-request';

/** 获取当前的用户 GET /api/currentUser */
export const getList = async (params:any) => {
    return request('/api/testTableList', {
      method: 'GET',
      data: params,
    });
  };