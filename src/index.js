const cool = require('cool-ascii-faces');

module.exports = async function App(context) {
  await context.sendText(cool());
};
