# 如何阅读官方文档 

官方文档一般都比较全面和深入浅出 , 比大部分的 博客二手资料好多了。


# java 
比如 oracle 官方 java 文档 , java 各个版本新特性都会由介绍 , 还有 java 学习路径
[JDK 11 Documentation - Home](https://docs.oracle.com/en/java/javase/11/)

# Spring

java 最著名的框架之一 `Spring Framework` 在线文档
[spring/docs/5.1.0.RELEASE/](https://docs.spring.io/spring/docs/5.1.0.RELEASE/) 非常详细 。  
RELEASE-dist 发行包 也提供下载
[spring-framework-5.1.0.RELEASE-dist.zip 21-Sep-2018 07:25  76.84 MB](https://repo.spring.io/libs-release-local/org/springframework/spring/5.1.0.RELEASE/)
但是下载链接并没有在官网显示提供,官网还是 更推荐 在线阅读 文档 和 使用 maven gradle  管理依赖


对于 `Spring Boot` 只有在线文档 [Spring Boot Reference Guide](https://docs.spring.io/spring-boot/docs/2.0.5.RELEASE/reference/htmlsingle/)
并没有找到 发行的压缩包
如果需要到本地 可以使用 `wget` 下载

    ## -b 后台下载(日志直接保存到文件)  --mirror 镜像  --no-parent 不下载父路径文件
    wget -b --mirror   --no-parent  https://docs.spring.io/spring-boot/docs/2.0.5.RELEASE/
    
    FINISHED --2018-10-06 06:18:37--
    Total wall clock time: 4m 28s
    Downloaded: 9214 files, 82M in 2.2s (36.5 MB/s)





# Gradle

官网提供下载二进制包 和 完整版的下载

[Gradle | Installation](https://gradle.org/install/)

The current Gradle release is version 4.10.2, released on 19 Sep 2018. The distribution zip file comes in two flavors:

*   [Binary-only](https://gradle.org/next-steps/?version=4.10.2&format=bin)
*   [Complete](https://gradle.org/next-steps/?version=4.10.2&format=all), with docs and sources


# Hibernate  
hibernate 也提供 zip 包的下载

##  Hibernate ORM 
[5.3 series - Hibernate ORM](http://hibernate.org/orm/releases/5.3/)
Zip archive
Direct download is available from SourceForge:   
[Download Zip archive](http://sourceforge.net/projects/hibernate/files/hibernate-orm/5.3.6.Final/hibernate-release-5.3.6.Final.zip/download)
 

## Hibernate Validator
[6.0 series - Hibernate Validator](http://hibernate.org/validator/releases/6.0/)
Zip archive
Direct download is available from SourceForge:   
[Download Zip archive](https://sourceforge.net/projects/hibernate/files/hibernate-validator/6.0.13.Final/hibernate-validator-6.0.13.Final-dist.zip/download)


# guava
google 的 java 核心库
使用教程在 github的wiki上
[Home · google/guava Wiki](https://github.com/google/guava/wiki)



# junit
测试框架 junit5 [JUnit 5 User Guide](https://junit.org/junit5/docs/current/user-guide/) 文档是直接放在 git 的 gh-pages 分支上  可以直接下载

[junit5/docs/5.3.1 at gh-pages · junit-team/junit5](https://github.com/junit-team/junit5/tree/gh-pages/docs/5.3.1)

# apache
apache 基金会下的软件 也大部分有详细的官方文档
 如 [Maven – Welcome to Apache Maven](https://maven.apache.org/)

如果需要下载 可以从 apache的 svn 库中直接下载 [infra - Revision 1036130: /](https://svn.apache.org/repos/infra/)



# 阅读

文档可以在线阅读 也可以使用 chrome 浏览器 的自动翻译功能。虽然某些词汇会翻译错误 比如 spring 的几个意思都会在不同的上下文中被翻译出来 春季/泉水/弹簧。 不过大体不影响阅读理解。

[Core Technologies](https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html#spring-core)

图片1: [原文 ](img/read-guide-01.PNG)

图片2: [Google 翻译](img/read-guide-02.PNG)


# 翻译

如果需要将 html文件翻译。可以使用 `谷歌译者工具包`
[Google Translator Toolkit](https://translate.google.com/toolkit/list?hl=zh_CN#translations/active)


图片3: [译者工具包 对比](img/read-guide-03.PNG)

