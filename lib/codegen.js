const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const beautify = require('js-beautify').js_beautify
const apiTemplate = fs.readFileSync(path.join(__dirname, './template/api.hbs'), 'utf-8')
const methods = fs.readFileSync(path.join(__dirname, './template/methods.hbs'), 'utf-8')
const method = fs.readFileSync(path.join(__dirname, './template/method.hbs'), 'utf-8')
const models = fs.readFileSync(path.join(__dirname, './template/models.hbs'), 'utf-8')
const model = fs.readFileSync(path.join(__dirname, './template/model.hbs'), 'utf-8')
const base = fs.readFileSync(path.join(__dirname, './template/base_model.hbs'), 'utf-8')
Handlebars.registerPartial('methods', methods)
Handlebars.registerPartial('method', method)
Handlebars.registerPartial('models', models)
Handlebars.registerPartial('model', model)
Handlebars.registerPartial('baseModel', base)
Handlebars.registerHelper('toLowerCase', function (word) {
  return word.toLowerCase()
})
Handlebars.registerHelper('breaklines', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, ' ');
    text.replace('"', '\'')
    return new Handlebars.SafeString(text);
});

Handlebars.registerHelper('capitalize', function(text) {
    return text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
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

Handlebars.registerHelper('list', function(ctx, opts) {
  let list = []
  Object.keys(ctx).forEach(function(key) {
    list.push({name: key, data: ctx[key]})
  });
  
  return list
})

Handlebars.registerHelper('defaultPropertyDescription', function() {
  if (this.description !== undefined) {
    let additional = ''
    if (this.enum && Array.isArray(this.enum)) {
      additional = ', Possible options: [' + this.enum.join(', ') + ']'
    }
    
    if (this.example !== undefined) {
      additional = 'Example: ' + this.example
    }
    return '// ' + this.description + ' ' + additional
  }
})

Handlebars.registerHelper('propertyHasRef', function (options) {
  let flat = (this.$ref !== undefined)
  let array = (this.type === 'array' && this.items !== undefined && this.items['$ref'])
  return (flat || array) ? options.fn(this) : options.inverse(this)
})

Handlebars.registerHelper('propertyRef', function () {
  if (this.$ref !== undefined) {
    return this.$ref.replace('#/definitions/', '')
  } else if (this.type === 'array' && this.items !== undefined && this.items['$ref']) {
    return this.items['$ref'].replace('#/definitions/', '')
  }
})

Handlebars.registerHelper('propertyType', function() {
  if (this.type === undefined && this.$ref !== undefined) {
    return 'ref'
  } else {
    return this.type
  }
})

Handlebars.registerHelper('defaultPropertyValue', function(ctx) {
  if (this.default !== undefined) {
    return this.default
  }
  
  // If array of enum's return first
  if (this.enum && Array.isArray(this.enum)) {
    return new Handlebars.SafeString('"' + this.enum[0] + '"')
  }
  
  // Will be referenced by other class as value
  if (this.$ref) {
    return 'null'
  }
  
  switch (this.type) {
    case 'string':
      return new Handlebars.SafeString('""')
    case 'integer32':
      return 'null'
    case 'integer':
      return 'null'
    case 'array':
      return '[]'
    case 'boolean':
      return false
    default:
      return 'null'
  }
})

module.exports = function (data) {
  let template = Handlebars.compile(apiTemplate)(data)
  template = beautify(template, {indent_size: 2, max_preserve_newlines: -1})
  return template
}
