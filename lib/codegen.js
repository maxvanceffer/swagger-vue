const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const beautify = require('js-beautify').js_beautify
const apiTemplate = fs.readFileSync(path.join(__dirname, './template/api.hbs'), 'utf-8')
const methods = fs.readFileSync(path.join(__dirname, './template/methods.hbs'), 'utf-8')
const method = fs.readFileSync(path.join(__dirname, './template/method.hbs'), 'utf-8')
Handlebars.registerPartial('methods', methods)
Handlebars.registerPartial('method', method)
Handlebars.registerHelper('toLowerCase', function (word) {
  return word.toLowerCase()
})
Handlebars.registerHelper('breaklines', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, ' ');
    text.replace('"', '\'')
    return new Handlebars.SafeString(text);
});

Handlebars.registerHelper('json', function(context) {
  return JSON.stringify(context)
})
Handlebars.registerHelper('rawParam', function (context) {
  if (typeof context === 'number') {
    return context
  } else {
    return '"' + context + '"'
  }
})
Handlebars.registerHelper('log', function(context) {
  console.log("// ----- ")
  console.log(JSON.stringify(context));
  console.log("// ----- ")
})
Handlebars.registerHelper('brackets', function (word) {
  return `{${word}}`
})
module.exports = function (data) {
  let template = Handlebars.compile(apiTemplate)(data)
  template = beautify(template, {indent_size: 2, max_preserve_newlines: -1})
  return template
}
