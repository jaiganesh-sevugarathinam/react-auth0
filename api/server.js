const express = require("express");
const cors = require("cors");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const axios = require("axios");

const app = express();
app.use(cors());

const verifyJWT = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 
    }),
    audience: "ExpressAPI22022024",
    issuer: "https://dev-3abz3yswvydie30m.us.auth0.com/",
    algorithms: ['RSA256']
})

app.get("/", (req, res) => {
  res.send("Hello from index route");
});

app.get("/protected", (req, res) => {
  res.send("Hello from protected route");
});

app.listen(4000, () => console.log("Server on port 4000"));
