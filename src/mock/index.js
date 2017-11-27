import axios from 'axios' //ajax请求
import {getShowsByCityCode} from '../api/'  //mockjs生成模拟数据
import MockAdapter from 'axios-mock-adapter'  //生成模拟接口地址

let mock = new MockAdapter(axios, { delayResponse: 1000 })

mock.onGet('/api/queryAdvertise').reply(function(config) {
    
    let params = config.params;
    console.log(params)
    let data = {
        code: getShowsByCityCode.code,
        data: []
    };
    data.data = getShowsByCityCode.data.splice( params.page*params.pageSize, params.pageSize )
    return [200, data]
    /**
     * 200 表示成功
     * 400 表示客户端错误，（客户端参数错误）
     * 500 表示服务端错误，服务端代码报错
     */
})

mock.onGet('/users').reply(200, {
    users: [
        { id: 1, name: 'John Smith' }
    ]
});
