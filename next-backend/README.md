# docker 部署脚本



```bin
--构建镜像
 docker build . -t next_backend
 -- 启动容器
 docker run -d -t --rm -p 82:3000 --name backend next_backend
-- 查看docker 占空间
docker system df
-- 清理docker 磁盘空间，会清理掉停止容器
docker system prune
-- nginx
docker run --name nginx-SCR -p 80:80 -v /home/song/projects/SCR/front:/usr/share/nginx/html -v /home/song/projects/nginx/conf/nginx.conf:/etc/nginx/conf.d -v /home/song/projects/nginx/logs:/var/log/nginx -d --restart=always nginx

```

