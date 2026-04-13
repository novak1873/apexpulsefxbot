// Importing necessary modules
const cron = require('node-cron');
const axios = require('axios');

// Array of Warren Buffett quotes related to investing and financial discipline
const quotes = [
    "Price is what you pay. Value is what you get.",
    "The stock market is designed to transfer money from the Active to the Patient.",
    "It’s far better to buy a wonderful company at a fair price than a fair company at a wonderful price.",
    "Be fearful when others are greedy and greedy when others are fearful.",
    "The first rule is not to lose. The second rule is not to forget the first rule."
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to post the market update
async function postMarketUpdate() {
    const quote = getRandomQuote();
    const message = `Market update: 
${quote}`;

    try {
        await axios.post('https://slack.com/api/chat.postMessage', {
            channel: '-1002563530059',
            text: message,
            token: 'YOUR_SLACK_BOT_TOKEN', // Make sure to replace this with your actual token
        });
        console.log('Market update posted successfully!');
    } catch (error) {
        console.error('Error posting market update:', error);
    }
}

// Schedule the market update to run every 6 hours Brisbane time
cron.schedule('0 */6 * * *', () => {
    console.log('Posting market update...');
    postMarketUpdate();
});

// Initial market update when the script starts
postMarketUpdate();