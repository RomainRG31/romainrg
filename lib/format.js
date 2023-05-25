const { EOL } = require("os");

const omit = require("lodash.omit");
const { render } = require("prettyjson");
const { say } = require("cowsay");

const renderOpts = {
  dashColor: "cyan",
  keysColor: "blue",
  stringColor: "white",
};

const intro = ({ name, title, city, cow }) =>
  say({
    text: `${name}${EOL}${EOL}${title}${EOL}${EOL}${city}`,
    f: cow,
  });

const fields = (data) =>
  render(omit(data, ["name", "title", "city"]), renderOpts);

module.exports = ({ data, cow }) => `
${intro(Object.assign({ cow }, data))}

${fields(data)}`;
