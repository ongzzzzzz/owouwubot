const cool = require('cool-ascii-faces');
const quotes = require('inspirational-quotes');

module.exports = async function App(context) {
  if (context.event.isText) {
    await context.sendText(quotes.getRandomQuote() + '\n' + '~ ' + cool());
  }
};
