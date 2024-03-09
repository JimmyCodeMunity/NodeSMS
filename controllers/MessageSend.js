const express = require('express');

const credentials = {
    apiKey: 'd70b4a1bd8a2b35a46fbe2f0c641588bf930235ac6bf021e95730963cae8c111',         // use your sandbox app API key for development in the test environment
    username: 'codemunity',      // use 'sandbox' for development in the test environment
};

const AfricasTalking = require('africastalking')(credentials);


// Initialize a service e.g. SMS
const SendMessage = async (req, res) => {
    try {
        const sms = AfricasTalking.SMS

        // Use the service
        const options = {
            to: ['+254112163919'],
            message: "I'm a lumberjack and its ok, I work all night and sleep all day"
        }

        // Send message and capture the response or error
        sms.send(options)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    } catch (error) {
        console.log(error);
        console.log('error sending message')
    }
}

module.exports = {
    SendMessage
}