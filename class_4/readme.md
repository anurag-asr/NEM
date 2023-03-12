
##   feature.route.js
const {Router} = require("express");

const featureRouter = Router();

featureRouter.get("/", () => {});

module.exports = featureRouter
const featureRouter = require("./featureRouter");

app.use("/feature", featureRouter);
here the featureRouter will get executed on /feature route onwards. this way you can combine any number of nested routers.

## Feature Middlewares
The job of these type of middlewares is to sit in between req and response. thus, these middlewares get executed before the request has reached to the route handler and before the response was reached to the client.

because of that you can do multiple things like validation, authentication, logging, security checks, analytics, req/res standardization and so on. the usecases are unlimited.

a simplest middleware looks like this


app.use((req, res, next) => {

});

here, req and res are the same objects that we have seen. the next is a function that invokes whatever is there on stack next.