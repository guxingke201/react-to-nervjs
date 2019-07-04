# 重现步骤

1. npm i
1. npm start
1. console没有输出异常
1. 修改gem-mine.config，取消注释如下代码，使用nervjs代替react
    ```
    react: 'nervjs',
    'react-dom': 'nervjs'
    ```
1. 重启npm start，console输出异常
```
Uncaught (in promise) TypeError: Cannot read property 'history' of undefined
    at Route.render (webpack-internal:///./node_modules/react-router/es/Route.js:104)
    at eval (index.esm.js?68fe:1761)
    at errorCatcher (index.esm.js?68fe:1655)
    at renderComponent (index.esm.js?68fe:1760)
    at updateComponent (index.esm.js?68fe:1846)
    at reRenderComponent (index.esm.js?68fe:1803)
    at ComponentWrapper.update (index.esm.js?68fe:2144)
    at patch (index.esm.js?68fe:933)
    at updateComponent (index.esm.js?68fe:1851)
    at rerender (index.esm.js?68fe:1938)
```