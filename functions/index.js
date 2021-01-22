const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IAcl5B2F0WPSCgVmtKmiCdM904WDrDEQXoHcf3Oxdor2evkxAU1rVakTv9mHkZOCNkCQ4hKmMpbeiYDREPmnXXy00K6DYVIrJ')


// - API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin : true}));
app.use(express.json());


// - API root
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received BOOM for this >> amount', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "TWD",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-8f724/us-central1/api