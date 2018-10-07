
环境
    
    安装日期:         20180617
    OS 名称:          Microsoft Windows 10 企业版
    OS 版本:          10.0.17134 暂缺 Build 17134
    Application Name:	 	Apache 2.4.33 x64
    Distribution File:	 	httpd-2.4.33-o102o-x64-vc14-r2.zip


步骤

 - 打开 [httpd apache  官网](https://httpd.apache.org/)
 - 找到 `Download!` 页面 [Download - The Apache HTTP Server Project](https://httpd.apache.org/download.cgi)
- 找到[Files for Microsoft Windows](https://httpd.apache.org/docs/current/platform/windows.html#down),
 注意此页面上也有关于apache的安装说明  `Running Apache as a Service
`
- 选择一个站点下载 如 [ApacheHaus](http://www.apachehaus.com/cgi-bin/download.plx)

- 没有特别需求选择最上的64位版本即可 `Apache 2.4.33 x64`

- 下载解压 `httpd-2.4.33-o102o-x64-vc14-r2`
   
   readme_first.html 关于软件 版本/支持信息 ,安装使用步骤  
   Apache24  软件本体文件夹

- 配置

  参考 `readme_first.html` 的安装说明  
  将 `Apache24` 文件夹移动到合适的目录下,如 `C:\Program Files`  
  修改 `Apache24\conf\httpd.conf` ,找到 `ServerRoot` 修改当前的路径。  
  注意 Windows上的直接复制的路径是反斜杆,要修改为斜杆。这在配置注释中有说明
        
        # 原始配置
        Define SRVROOT "/Apache24"
        ServerRoot "${SRVROOT}"
        # 修改后
        Define SRVROOT "C:/Program Files/Apache24"
        ServerRoot "${SRVROOT}"

- 安装
  
  使用管理员权限打开控制台,注意如果使用 `Windows PowerShell` 有的报错信息不会有提示。   

  进入bin 目录 `cd "C:/Program Files/Apache24"` ,运行 `httpd -k install`,
  可能会提示 `由于找不到vcruntime140.dll 无法继续执行代码` ,这个在`readme_first.html` 中也有说明 需要一个运行环境,无法直接运行在 Windows XP 或 Windows Server 2003,并给出了下载地址 ,当前版本的win10貌似也有这个问题,下载安装即可。

  重新运行  

        httpd -k install
        httpd -k start
  打开浏览器访问 `http://127.0.0.1/` 或者 `http://localhost/` 网页正常显示 就安装成功了

 - ![apache-httpd 官网](img/install-apache-01.webp)
 - ![apache-httpd 官网-机器翻译](img/install-apache-02.webp)
 - ![下载页](img/install-apache-03.webp)
 - ![Downloading Apache for Windows](img/install-apache-04.webp)
 - ![Running Apache as a Service](img/install-apache-05.webp)
 - ![apachehaus-download-page](img/install-apache-06.webp)
 - ![Apache 2.4 Server Binaries](img/install-apache-07.webp)
 - ![apache-httpd-download](img/install-apache-08.webp)
 - ![解压](img/install-apache-09.webp)
 - ![readme_first.html](img/install-apache-10.webp)
 - ![修改配置文件](img/install-apache-11.webp)
 - ![ps-安装启动](img/install-apache-12.webp)
 - ![cmd-启动报错](img/install-apache-13.webp)
 - ![下载VC](img/install-apache-14.webp)
 - ![启动](img/install-apache-15.webp)    