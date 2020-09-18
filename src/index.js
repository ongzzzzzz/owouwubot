const cool = require('cool-ascii-faces');

module.exports = async function App(context) {
  if (context.event.isText) {
    await context.sendText(cool());
  }
};
