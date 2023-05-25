const { EOL } = require("os");

const omit = require("lodash.omit");
const { render } = require("prettyjson");
const { think } = require("cowsay");

const renderOpts = {
  dashColor: "cyan",
  keysColor: "blue",
  stringColor: "white",
};

const intro = ({ name, title, cow }) =>
  think({
    text: `${name}${EOL}${EOL}${title}`,
    f: cow,
  });

const fields = (data) => render(omit(data, ["name", "title"]), renderOpts);

module.exports = ({ data, cow }) => `
${intro(Object.assign({ cow }, data))}

${fields(data)}`;
