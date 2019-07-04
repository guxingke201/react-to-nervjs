# 重现步骤

1. npm i
1. npm start
1. npm start，切换路由，内容正常切换
1. 修改config-overrides.js，取消注释如下代码，使用nervjs代替react
    ```
    react: 'nervjs',
        'react-dom': 'nervjs'
    ```
1. 重启npm start，切换路由，内容不会变，刷新之后才出来了