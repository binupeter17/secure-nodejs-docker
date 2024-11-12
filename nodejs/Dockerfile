FROM node:alpine

RUN adduser -h /var/hello-world -s /bin/sh -D nodejs-user

RUN mkdir -p /var/hello-world/

WORKDIR /var/hello-world/

COPY . .

RUN chown -R nodejs-user. /var/hello-world/

USER nodejs-user

CMD ["node","app.js"]
