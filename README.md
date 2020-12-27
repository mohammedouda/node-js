# node-js

- npm install express 
- npm start 
- make sure that file 'package.json' will be exists on the same directory includes the following 

For POST \ 

curl -X POST -H "Content-Type: application/json"\ 
    -d '{"name": "moha oudah"}' \
    localhost:3000/data 

For get \

curl -X GET \
  -H "Content-type: application/json" \
  -H "Accept: application/json" \
 
  "localhost:3000/greeting/moha oudah"

