const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")("sk_test_51KCXHSBLGrk3g2wVIBQvF2nce8qFsusIfkjwCYHievB1piApZxk25yFVXi9BFvlNiuOsLqap8d13LDGiwDTrrpyP00R1sk943a"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());


// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total; 

    console.log('payment request received', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //sub units of the currency
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// example end point
// http://localhost:5001/project-4d532/us-central1/api
