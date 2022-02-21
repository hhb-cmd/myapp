import {Request,Response} from "express";

const TableList = async (req:Request,res:Response)=>{
    const result = {
        success:true,
            data:[
                {
                    id:1,
                    title:'🐛 [BUG]yarn install命令 antd2.4.5会报错',
                    state:'open',
                    labels:[
                        {name: 'bug', color: 'error'}
                    ],
                    created_at:"2020-02-26T04:25:59Z"
                },
                {
                    id:2,
                    title:'🐛 [BUG]无法创建工程npm create umi',
                    state:'closed',
                    labels:[
                        {name: 'question', color: 'success'}
                    ],
                    created_at:"2020-01-26T05:25:59Z"
                },
                {
                    id:3,
                    title:'🧐 [问题] build 后还存在 es6 的代码（Umi@2.13.13）',
                    state:'closed',
                    labels:[
                        {name: 'bug', color: 'error'}
                    ],
                    created_at:"2021-05-26T04:25:59Z"
                },
                {
                    id:4,
                    title:'2.3.1版本如何在业务页面修改头部状态',
                    state:'processing',
                    labels:[
                        {name: 'question', color: 'success'}
                    ],
                    created_at:"2020-05-26T04:21:59Z"
                },
                {
                    id:5,
                    title:'hideChildrenInMenu设置后，子路由找不到了',
                    state:'open',
                    labels:[
                        {name: 'bug', color: 'error'}
                    ],
                    created_at:"2023-05-26T05:27:59Z"
                }
            ],
            page: 1,
            total: 30
        }
    return res.json(result);
}
export default {
    'GET /api/testTableList':TableList,
}