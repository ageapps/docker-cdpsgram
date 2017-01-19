## CDPSgram-server

### Dependencies

- node.js
- npm

### How to install

<pre>
git clone https://github.com/aalonsog/CDPSgram-server.git
cd CDPSgram-server
npm install
</pre>

### How to configure

+ The server is configured to listen in port 8080. You can modify that folder using the env variable 'PORT'
+ The server is configured to use a photos REST server listening in "http://localhost:8000". You can modify it using the env variable 'PHOTOS_URL'

### How to run

<pre>
npm start
</pre>