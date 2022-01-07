# docker 部署脚本





```bin

 docker build . -t next_backend
 
 docker run -d -t --rm -p 82:3000 --name backend next_backend

```

