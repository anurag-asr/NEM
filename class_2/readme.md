In starting
# create server(you always have to start like this )
const http=require("http")
const server=http.createServer((req,res)=>{
    res.write("hello");
    res.write("world");
    res.end("!") 
})
server.listen(5000,()=>{
    console.log("Listening on port localHost:5000")
})

## for automatically updating the node on change please install use Nodemon
* npm i -y
* npm i nodemon or if not working propery => npm i -g nodemon
* go for package-json=>type{"scripts":"nodemon index.js"}  //so it will update when the dependenct related to index.js changes
* npm run server
* you have to relaod the browser for see the changes on ui and also checking the consoling part on node

## BenchMarking
here **npx autocannon <url>** in terminal(give no of request on server by pc)

## Streaming the data or send the data in (Chuncks)
const readStream=fs.createReadStream("./posts.json",{encoding:"utf-8"})
readStream.pipe(res)

## HTTP Statuses
Every HTTP request returns a response code in return. the codes are never random. they always have meanings. eg, 404 Not Found the most widely used status code. that means, if client request for a 'resource' and if it doesn't exist on server, server will send a status code 404. now client doesn't need to parse any other information. by just looking at this statuscode client knows that server couldn't find the requested entity.

The codes always lie in some range. 100-199: Information Content. eg: 100: Continue 200-299: Success. Eg: 200: OK, 201: Created 300-399: Redirection. Eg: 307: Temporary Redirect 400-499: Client Error. eg: 403: Forbidden, 404: Not found, 400: Bad request 500-599: Server Error. eg: 500: Internal Server Error

All these statuses are really helpful to understand what exactly happened with the requested resource.


## Headers
Every single request and Every single response has 'headers' properties. a header is nothing but a key value pair that represents more information about request or response itself.

Eg: if a server sending following response back: Hello world. server can send an header content-type with it. if the value of content-type is text/plain the client who received the reponse will now know that it has received plain text reponse and it doesn't need to parse it etc.

## Nodejs HTTP creating http server with nodejs is as simple as
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello World");
});
server.listen(8080)

Here req is the object that holds all the information about one single request. include methods, URLs, headers etc similarly res is the object which holds everything about res. eg: res.end will finish one response.

<!-- put replacing the whole tube -->
<!-- patch is put the patch on tube which was punchured -->