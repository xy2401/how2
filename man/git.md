

# 文件名过长无法检出

spring/spring-boot-docs-1.5.20.RELEASE/api/org/springframework/boot/autoconfigure/security/oauth2/resource/class-use/ResourceServerTokenServicesConfiguration.RemoteTokenServicesConfiguration.SocialTokenServicesConfiguration.html: Filename too long
error: unable to create file spring/spring-boot-docs-1.5.20.RELEASE/api/org/springframework/boot/autoconfigure/security/oauth2/resource/class-use/ResourceServerTokenServicesConfiguration.RemoteTokenServicesConfiguration.UserInfoTokenServicesConfiguration.html: Filename too long

    git config --global core.longpaths true

[git for windows下的Filename too long - 赶路人儿 - CSDN博客](https://blog.csdn.net/liuxiao723846/article/details/78329223)

# 文件模式不对

diff --git a/README.md b/README.md
old mode 100644
new mode 100755


[git diff old mode 100755 new mode 100644 - Magnum Programm Life - 博客园](https://www.cnblogs.com/biglucky/p/3793983.html)



    git config --global core.filemode false
    git config core.filemode false