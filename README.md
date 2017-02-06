# docker-cdspgram

High availability system whith [CDPSGram server] and [CDPSGram photos] servers.


## System Diagram

![system-diagram](./art/system-diagram.png)

The system consists on the following containers:

+ **Proxy**: NGINX as firewall and reverse proxy.
+ **LB-server**: HAPROXY as LB from the server service
+ **LB-photos**: HAPROXY as LB from the photos rest service.
+ **Server**: NodeJS server.
+ **photos-rest**: NodeJS REST server.
+ **DB**: MongoDB database master in replication set.

## Usage
Downloading the source code

```groovy
$ git clone https://github.com/ageapps/docker-cdpsgram
$ cd docker-cdpsgram
$ docker-compose up
// connect in your browser to <host IP>:80,
// through the compose logs, you can see
// the proxy, lbs and mongo slaves working
```

## Resources
+ [Docker]: Software containerization platform
+ [node.js]: Server enviroment.
+ [MongoDB]: NoSQL database system.
+ [mongoose]: MongoDB object modeling for *node.js*.
+ [docker-build]: Automated build of *Docker* images.
+ [docker-compose]: Automated configuration and run of multi-container *Docker* applications.


[CDPSGram server]:https://github.com/aalonsog/CDPSgram-server
[CDPSGram photos]:https://github.com/aalonsog/CDPSgram-photos
[MongoDB]: https://www.mongodb.com
[mongoose]: http://mongoosejs.com/index.html
[node.js]: http://nodejs.org
[Docker]: https://docs.docker.com/
[docker-compose]:https://docs.docker.com/compose/compose-file/
[docker-build]:https://docs.docker.com/engine/reference/builder/
