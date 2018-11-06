[保存当前网页](javascript:void((function(){window.open("data:application/octet-stream,"+encodeURIComponent(document.documentElement.outerHTML));})()))


[获取网页超链接](javascript:void((function(){window.open("data:application/octet-stream,"+encodeURIComponent(Array.from(document.querySelectorAll('a')).map(e=>e.href).join('\n')));})()))


[保持网页活动](javascript:void(setInterval(() => fetch(window.location.href), 1000) ))
