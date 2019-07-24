# 重现步骤

1. npm i
1. npm start
1. 直接访问http://localhost:3000/hello 或进入hello后刷新一下报如下异常（从根路由进入/hello不会出现异常）
    ```
    browser.js:34 Uncaught (in promise) Invariant Violation: Could not find "store" in the context of "Connect(HelloChild)". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(HelloChild) in connect options.
        at invariant (http://localhost:3000/static/js/0.chunk.js:3865:15)
        at Connect.renderWrappedComponent (http://localhost:3000/static/js/0.chunk.js:14173:57)
        at Connect.indirectRenderWrappedComponent (http://localhost:3000/static/js/0.chunk.js:14169:21)
        at Consumer.render (http://localhost:3000/static/js/0.chunk.js:8228:44)
        at http://localhost:3000/static/js/0.chunk.js:7263:26
        at errorCatcher (http://localhost:3000/static/js/0.chunk.js:7131:12)
        at renderComponent (http://localhost:3000/static/js/0.chunk.js:7262:3)
        at mountComponent (http://localhost:3000/static/js/0.chunk.js:7228:18)
        at ComponentWrapper.init (http://localhost:3000/static/js/0.chunk.js:7705:13)
        at createElement (http://localhost:3000/static/js/0.chunk.js:6813:25)
        at mountVNode (http://localhost:3000/static/js/0.chunk.js:7184:10)
        at mountComponent (http://localhost:3000/static/js/0.chunk.js:7236:25)
        at ComponentWrapper.init (http://localhost:3000/static/js/0.chunk.js:7705:13)
        at createElement (http://localhost:3000/static/js/0.chunk.js:6813:25)
        at mountChild (http://localhost:3000/static/js/0.chunk.js:6896:19)
        at mountVNode$1 (http://localhost:3000/static/js/0.chunk.js:6879:7)
        at createElement (http://localhost:3000/static/js/0.chunk.js:6822:19)
        at mountVNode (http://localhost:3000/static/js/0.chunk.js:7184:10)
        at mountComponent (http://localhost:3000/static/js/0.chunk.js:7236:25)
        at ComponentWrapper.init (http://localhost:3000/static/js/0.chunk.js:7705:13)
        at createElement (http://localhost:3000/static/js/0.chunk.js:6813:25)
        at patch (http://localhost:3000/static/js/0.chunk.js:6276:14)
        at updateComponent (http://localhost:3000/static/js/0.chunk.js:7367:23)
        at rerender (http://localhost:3000/static/js/0.chunk.js:7469:7)
    ```
1. 修改config-overrides.js，注释如下代码，不使用nervjs代替react
    ```
    // react: 'nervjs',
    // 'react-dom': 'nervjs'
    ```
1. 重启npm start，访问http://localhost:3000/hello，没有异常，刷新一下没有异常
