
一些有用的js书签脚本 可以直接拖到书签菜单 在任何网页上使用



-   保存当前网页 
[文本下载](javascript:void((function(){window.open("data:application/octet-stream,"+encodeURIComponent(document.documentElement.outerHTML));})())) 
[文件显示](javascript:void((function(){window.open("data:text/plain;charset=utf-8,"+encodeURIComponent(document.documentElement.outerHTML));})())) 

将当前网页下载为文件 另存为是保持原始文件 这个脚本获取的是当前生成变更的实际 html
利用[Data URLs - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)




-   获取网页超链接 
[文本下载](javascript:void((function(){window.open("data:application/octet-stream,"+encodeURIComponent(Array.from(document.querySelectorAll('a')).map(e=>e.href).join('\n')));})()))
[文件显示](javascript:void((function(){window.open("data:text/plain;charset=utf-8,"+encodeURIComponent(Array.from(document.querySelectorAll('a')).map(e=>e.href).join('\n')));})()))

保持当前网页上的超链接




-   [保持活动](  javascript:void((function(){setInterval(() => fetch(window.location.href), 5000) ;})())  )
每隔5秒钟`fetch`访问一次当前 `url`  以保持会话


-   [刷新网页](  javascript:void((function(){ let newWindow = window.open(window.location.href);setInterval(() =>  newWindow.location.reload() , 5000);  })())  )
打开一个新窗口 并五秒刷新一次 如果直接刷新当前网页 不能做到 五秒定时刷新



- 解除当前网页上所有dom的事件
[除你事件](javascript:void((function(){document.body.outerHTML=document.body.outerHTML;})()))
解除网页上所有dom的事件(由js后续绑定上的事件),原理很简单当前页面`HTML`用当前`HTML`替换这样所有的dom都是新的 并且未绑定上 `JavaScript` 事件

[Javascript/DOM: How to remove all events of a DOM object? - Stack Overflow](https://stackoverflow.com/questions/4386300/javascript-dom-how-to-remove-all-events-of-a-dom-object)




- 页面编辑
使页面可以编辑
[页面编辑](javascript:void((function(){document.body.contentEditable=true;})()))


