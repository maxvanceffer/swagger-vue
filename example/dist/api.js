/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = 'https://petstore.swagger.io/v2'
let axiosInstance = axios.create()
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const getAxiosInstance = () => {
  return axiosInstance
}
export const setAxiosInstance = ($axiosInstance) => {
  axiosInstance = $axiosInstance
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axiosInstance[method](queryUrl, body, config)
  } else if (method === 'get' || method === 'delete' || method === 'head' || method === 'option') {
    return axiosInstance[method](queryUrl, config)
  } else {
    return axiosInstance[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 ==========================================================*/
/**
 * Add a new pet to the store
 * request: addPet
 * url: addPetURL
 * method: addPet_TYPE
 * raw_url: addPet_RAW_URL
 * @param body - Pet object that needs to be added to the store
 */
export const addPet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/pet'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const addPet_PARAMETERS = {
  body: { in: "body",
    name: "body",
    description: "Pet object that needs to be added to the store",
    required: true,
    schema: {
      "$ref": "#/definitions/Pet"
    },
    camelCaseName: "body",
    isBodyParameter: true,
  }
}
export const addPet_META = {
  description: "",
  summary: "Add a new pet to the store",
  operationId: "addPet",
  tags: ["pet"]
}
export const addPet_RAW_URL = function() {
  return '/pet'
}
export const addPet_TYPE = function() {
  return 'post'
}
export const addPetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/pet'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Update an existing pet
 * request: updatePet
 * url: updatePetURL
 * method: updatePet_TYPE
 * raw_url: updatePet_RAW_URL
 * @param body - Pet object that needs to be added to the store
 */
export const updatePet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/pet'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updatePet_PARAMETERS = {
  body: { in: "body",
    name: "body",
    description: "Pet object that needs to be added to the store",
    required: true,
    schema: {
      "$ref": "#/definitions/Pet"
    },
    camelCaseName: "body",
    isBodyParameter: true,
  }
}
export const updatePet_META = {
  description: "",
  summary: "Update an existing pet",
  operationId: "updatePet",
  tags: ["pet"]
}
export const updatePet_RAW_URL = function() {
  return '/pet'
}
export const updatePet_TYPE = function() {
  return 'put'
}
export const updatePetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/pet'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Finds Pets by status
 * request: findPetsByStatus
 * url: findPetsByStatusURL
 * method: findPetsByStatus_TYPE
 * raw_url: findPetsByStatus_RAW_URL
 * @param status - Status values that need to be considered for filter
 */
export const findPetsByStatus = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/pet/findByStatus'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['status'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: status'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const findPetsByStatus_PARAMETERS = {
  status: {
    name: "status",
    in: "query",
    description: "Status values that need to be considered for filter",
    required: true,
    type: "array",
    items: {
      "type": "string",
      "enum": ["available", "pending", "sold"],
      "default": "available"
    },
    collectionFormat: "multi",
    camelCaseName: "status",
    isQueryParameter: true,
  }
}
export const findPetsByStatus_META = {
  description: "Multiple status values can be provided with comma separated strings",
  summary: "Finds Pets by status",
  operationId: "findPetsByStatus",
  tags: ["pet"]
}
export const findPetsByStatus_RAW_URL = function() {
  return '/pet/findByStatus'
}
export const findPetsByStatus_TYPE = function() {
  return 'get'
}
export const findPetsByStatusURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/pet/findByStatus'
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Finds Pets by tags
 * request: findPetsByTags
 * url: findPetsByTagsURL
 * method: findPetsByTags_TYPE
 * raw_url: findPetsByTags_RAW_URL
 * @param tags - Tags to filter by
 */
export const findPetsByTags = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/pet/findByTags'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['tags'] !== undefined) {
    queryParameters['tags'] = parameters['tags']
  }
  if (parameters['tags'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tags'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const findPetsByTags_PARAMETERS = {
  tags: {
    name: "tags",
    in: "query",
    description: "Tags to filter by",
    required: true,
    type: "array",
    items: {
      "type": "string"
    },
    collectionFormat: "multi",
    camelCaseName: "tags",
    isQueryParameter: true,
  }
}
export const findPetsByTags_META = {
  description: "Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
  summary: "Finds Pets by tags",
  operationId: "findPetsByTags",
  tags: ["pet"]
}
export const findPetsByTags_RAW_URL = function() {
  return '/pet/findByTags'
}
export const findPetsByTags_TYPE = function() {
  return 'get'
}
export const findPetsByTagsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/pet/findByTags'
  if (parameters['tags'] !== undefined) {
    queryParameters['tags'] = parameters['tags']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Find pet by ID
 * request: getPetById
 * url: getPetByIdURL
 * method: getPetById_TYPE
 * raw_url: getPetById_RAW_URL
 * @param petId - ID of pet to return
 */
export const getPetById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/pet/{petId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: petId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getPetById_PARAMETERS = {
  petId: {
    name: "petId",
    in: "path",
    description: "ID of pet to return",
    required: true,
    type: "integer",
    format: "int64",
    camelCaseName: "petId",
    isPathParameter: true,
  }
}
export const getPetById_META = {
  description: "Returns a single pet",
  summary: "Find pet by ID",
  operationId: "getPetById",
  tags: ["pet"]
}
export const getPetById_RAW_URL = function() {
  return '/pet/{petId}'
}
export const getPetById_TYPE = function() {
  return 'get'
}
export const getPetByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/pet/{petId}'
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates a pet in the store with form data
 * request: updatePetWithForm
 * url: updatePetWithFormURL
 * method: updatePetWithForm_TYPE
 * raw_url: updatePetWithForm_RAW_URL
 * @param petId - ID of pet that needs to be updated
 * @param name - Updated name of the pet
 * @param status - Updated status of the pet
 */
export const updatePetWithForm = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/pet/{petId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: petId'))
  }
  if (parameters['name'] !== undefined) {
    form['name'] = parameters['name']
  }
  if (parameters['status'] !== undefined) {
    form['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const updatePetWithForm_PARAMETERS = {
  petId: {
    name: "petId",
    in: "path",
    description: "ID of pet that needs to be updated",
    required: true,
    type: "integer",
    format: "int64",
    camelCaseName: "petId",
    isPathParameter: true,
  },
  name: {
    name: "name",
    in: "formData",
    description: "Updated name of the pet",
    type: "string",
    camelCaseName: "name",
    isFormParameter: true,
    cardinality: "?"
  },
  status: {
    name: "status",
    in: "formData",
    description: "Updated status of the pet",
    type: "string",
    camelCaseName: "status",
    isFormParameter: true,
    cardinality: "?"
  }
}
export const updatePetWithForm_META = {
  description: "",
  summary: "Updates a pet in the store with form data",
  operationId: "updatePetWithForm",
  tags: ["pet"]
}
export const updatePetWithForm_RAW_URL = function() {
  return '/pet/{petId}'
}
export const updatePetWithForm_TYPE = function() {
  return 'post'
}
export const updatePetWithFormURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/pet/{petId}'
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes a pet
 * request: deletePet
 * url: deletePetURL
 * method: deletePet_TYPE
 * raw_url: deletePet_RAW_URL
 * @param apiKey - 
 * @param petId - Pet id to delete
 */
export const deletePet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/pet/{petId}'
  let body
  let queryParameters = {}
  let form = {}
  if (config.headers === undefined) {
    config.headers = {}
  }
  if (parameters['apiKey'] !== undefined) {
    config.headers['api_key'] = parameters['apiKey']
  }
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: petId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deletePet_PARAMETERS = {
  apiKey: {
    name: "api_key",
    in: "header",
    type: "string",
    camelCaseName: "apiKey",
    isHeaderParameter: true,
    cardinality: "?"
  },
  petId: {
    name: "petId",
    in: "path",
    description: "Pet id to delete",
    required: true,
    type: "integer",
    format: "int64",
    camelCaseName: "petId",
    isPathParameter: true,
  }
}
export const deletePet_META = {
  description: "",
  summary: "Deletes a pet",
  operationId: "deletePet",
  tags: ["pet"]
}
export const deletePet_RAW_URL = function() {
  return '/pet/{petId}'
}
export const deletePet_TYPE = function() {
  return 'delete'
}
export const deletePetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/pet/{petId}'
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * uploads an image
 * request: uploadFile
 * url: uploadFileURL
 * method: uploadFile_TYPE
 * raw_url: uploadFile_RAW_URL
 * @param petId - ID of pet to update
 * @param additionalMetadata - Additional data to pass to server
 * @param file - file to upload
 */
export const uploadFile = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/pet/{petId}/uploadImage'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: petId'))
  }
  if (parameters['additionalMetadata'] !== undefined) {
    form['additionalMetadata'] = parameters['additionalMetadata']
  }
  if (parameters['file'] !== undefined) {
    form['file'] = parameters['file']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const uploadFile_PARAMETERS = {
  petId: {
    name: "petId",
    in: "path",
    description: "ID of pet to update",
    required: true,
    type: "integer",
    format: "int64",
    camelCaseName: "petId",
    isPathParameter: true,
  },
  additionalMetadata: {
    name: "additionalMetadata",
    in: "formData",
    description: "Additional data to pass to server",
    type: "string",
    camelCaseName: "additionalMetadata",
    isFormParameter: true,
    cardinality: "?"
  },
  file: {
    name: "file",
    in: "formData",
    description: "file to upload",
    type: "file",
    camelCaseName: "file",
    isFormParameter: true,
    cardinality: "?"
  }
}
export const uploadFile_META = {
  description: "",
  summary: "uploads an image",
  operationId: "uploadFile",
  tags: ["pet"]
}
export const uploadFile_RAW_URL = function() {
  return '/pet/{petId}/uploadImage'
}
export const uploadFile_TYPE = function() {
  return 'post'
}
export const uploadFileURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/pet/{petId}/uploadImage'
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns pet inventories by status
 * request: getInventory
 * url: getInventoryURL
 * method: getInventory_TYPE
 * raw_url: getInventory_RAW_URL
 */
export const getInventory = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/store/inventory'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getInventory_PARAMETERS = {}
export const getInventory_META = {
  description: "Returns a map of status codes to quantities",
  summary: "Returns pet inventories by status",
  operationId: "getInventory",
  tags: ["store"]
}
export const getInventory_RAW_URL = function() {
  return '/store/inventory'
}
export const getInventory_TYPE = function() {
  return 'get'
}
export const getInventoryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/store/inventory'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Place an order for a pet
 * request: placeOrder
 * url: placeOrderURL
 * method: placeOrder_TYPE
 * raw_url: placeOrder_RAW_URL
 * @param body - order placed for purchasing the pet
 */
export const placeOrder = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/store/order'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const placeOrder_PARAMETERS = {
  body: { in: "body",
    name: "body",
    description: "order placed for purchasing the pet",
    required: true,
    schema: {
      "$ref": "#/definitions/Order"
    },
    camelCaseName: "body",
    isBodyParameter: true,
  }
}
export const placeOrder_META = {
  description: "",
  summary: "Place an order for a pet",
  operationId: "placeOrder",
  tags: ["store"]
}
export const placeOrder_RAW_URL = function() {
  return '/store/order'
}
export const placeOrder_TYPE = function() {
  return 'post'
}
export const placeOrderURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/store/order'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Find purchase order by ID
 * request: getOrderById
 * url: getOrderByIdURL
 * method: getOrderById_TYPE
 * raw_url: getOrderById_RAW_URL
 * @param orderId - ID of pet that needs to be fetched
 */
export const getOrderById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/store/order/{orderId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{orderId}', `${parameters['orderId']}`)
  if (parameters['orderId'] !== undefined && parameters['orderId'] < 1) {
    return Promise.reject(new Error('Parameter "orderId" value must be higher then: 1'))
  }
  if (parameters['orderId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: orderId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getOrderById_PARAMETERS = {
  orderId: {
    name: "orderId",
    in: "path",
    description: "ID of pet that needs to be fetched",
    required: true,
    type: "integer",
    maximum: 10,
    minimum: 1,
    format: "int64",
    camelCaseName: "orderId",
    isPathParameter: true,
  }
}
export const getOrderById_META = {
  description: "For valid response try integer IDs with value &gt;&#x3D; 1 and &lt;&#x3D; 10. Other values will generated exceptions",
  summary: "Find purchase order by ID",
  operationId: "getOrderById",
  tags: ["store"]
}
export const getOrderById_RAW_URL = function() {
  return '/store/order/{orderId}'
}
export const getOrderById_TYPE = function() {
  return 'get'
}
export const getOrderByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/store/order/{orderId}'
  path = path.replace('{orderId}', `${parameters['orderId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Delete purchase order by ID
 * request: deleteOrder
 * url: deleteOrderURL
 * method: deleteOrder_TYPE
 * raw_url: deleteOrder_RAW_URL
 * @param orderId - ID of the order that needs to be deleted
 */
export const deleteOrder = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/store/order/{orderId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{orderId}', `${parameters['orderId']}`)
  if (parameters['orderId'] !== undefined && parameters['orderId'] < 1) {
    return Promise.reject(new Error('Parameter "orderId" value must be higher then: 1'))
  }
  if (parameters['orderId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: orderId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteOrder_PARAMETERS = {
  orderId: {
    name: "orderId",
    in: "path",
    description: "ID of the order that needs to be deleted",
    required: true,
    type: "integer",
    minimum: 1,
    format: "int64",
    camelCaseName: "orderId",
    isPathParameter: true,
  }
}
export const deleteOrder_META = {
  description: "For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors",
  summary: "Delete purchase order by ID",
  operationId: "deleteOrder",
  tags: ["store"]
}
export const deleteOrder_RAW_URL = function() {
  return '/store/order/{orderId}'
}
export const deleteOrder_TYPE = function() {
  return 'delete'
}
export const deleteOrderURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/store/order/{orderId}'
  path = path.replace('{orderId}', `${parameters['orderId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Create user
 * request: createUser
 * url: createUserURL
 * method: createUser_TYPE
 * raw_url: createUser_RAW_URL
 * @param body - Created user object
 */
export const createUser = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/user'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createUser_PARAMETERS = {
  body: { in: "body",
    name: "body",
    description: "Created user object",
    required: true,
    schema: {
      "$ref": "#/definitions/User"
    },
    camelCaseName: "body",
    isBodyParameter: true,
  }
}
export const createUser_META = {
  description: "This can only be done by the logged in user.",
  summary: "Create user",
  operationId: "createUser",
  tags: ["user"]
}
export const createUser_RAW_URL = function() {
  return '/user'
}
export const createUser_TYPE = function() {
  return 'post'
}
export const createUserURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/user'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates list of users with given input array
 * request: createUsersWithArrayInput
 * url: createUsersWithArrayInputURL
 * method: createUsersWithArrayInput_TYPE
 * raw_url: createUsersWithArrayInput_RAW_URL
 * @param body - List of user object
 */
export const createUsersWithArrayInput = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/user/createWithArray'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createUsersWithArrayInput_PARAMETERS = {
  body: { in: "body",
    name: "body",
    description: "List of user object",
    required: true,
    schema: {
      "type": "array",
      "items": {
        "$ref": "#/definitions/User"
      }
    },
    camelCaseName: "body",
    isBodyParameter: true,
  }
}
export const createUsersWithArrayInput_META = {
  description: "",
  summary: "Creates list of users with given input array",
  operationId: "createUsersWithArrayInput",
  tags: ["user"]
}
export const createUsersWithArrayInput_RAW_URL = function() {
  return '/user/createWithArray'
}
export const createUsersWithArrayInput_TYPE = function() {
  return 'post'
}
export const createUsersWithArrayInputURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/user/createWithArray'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates list of users with given input array
 * request: createUsersWithListInput
 * url: createUsersWithListInputURL
 * method: createUsersWithListInput_TYPE
 * raw_url: createUsersWithListInput_RAW_URL
 * @param body - List of user object
 */
export const createUsersWithListInput = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/user/createWithList'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createUsersWithListInput_PARAMETERS = {
  body: { in: "body",
    name: "body",
    description: "List of user object",
    required: true,
    schema: {
      "type": "array",
      "items": {
        "$ref": "#/definitions/User"
      }
    },
    camelCaseName: "body",
    isBodyParameter: true,
  }
}
export const createUsersWithListInput_META = {
  description: "",
  summary: "Creates list of users with given input array",
  operationId: "createUsersWithListInput",
  tags: ["user"]
}
export const createUsersWithListInput_RAW_URL = function() {
  return '/user/createWithList'
}
export const createUsersWithListInput_TYPE = function() {
  return 'post'
}
export const createUsersWithListInputURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/user/createWithList'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Logs user into the system
 * request: loginUser
 * url: loginUserURL
 * method: loginUser_TYPE
 * raw_url: loginUser_RAW_URL
 * @param username - The user name for login
 * @param password - The password for login in clear text
 */
export const loginUser = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/user/login'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters['password'] !== undefined) {
    queryParameters['password'] = parameters['password']
  }
  if (parameters['password'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: password'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loginUser_PARAMETERS = {
  username: {
    name: "username",
    in: "query",
    description: "The user name for login",
    required: true,
    type: "string",
    camelCaseName: "username",
    isQueryParameter: true,
  },
  password: {
    name: "password",
    in: "query",
    description: "The password for login in clear text",
    required: true,
    type: "string",
    camelCaseName: "password",
    isQueryParameter: true,
  }
}
export const loginUser_META = {
  description: "",
  summary: "Logs user into the system",
  operationId: "loginUser",
  tags: ["user"]
}
export const loginUser_RAW_URL = function() {
  return '/user/login'
}
export const loginUser_TYPE = function() {
  return 'get'
}
export const loginUserURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/user/login'
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters['password'] !== undefined) {
    queryParameters['password'] = parameters['password']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Logs out current logged in user session
 * request: logoutUser
 * url: logoutUserURL
 * method: logoutUser_TYPE
 * raw_url: logoutUser_RAW_URL
 */
export const logoutUser = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/user/logout'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const logoutUser_PARAMETERS = {}
export const logoutUser_META = {
  description: "",
  summary: "Logs out current logged in user session",
  operationId: "logoutUser",
  tags: ["user"]
}
export const logoutUser_RAW_URL = function() {
  return '/user/logout'
}
export const logoutUser_TYPE = function() {
  return 'get'
}
export const logoutUserURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/user/logout'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Get user by user name
 * request: getUserByName
 * url: getUserByNameURL
 * method: getUserByName_TYPE
 * raw_url: getUserByName_RAW_URL
 * @param username - The name that needs to be fetched. Use user1 for testing. 
 */
export const getUserByName = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/user/{username}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{username}', `${parameters['username']}`)
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getUserByName_PARAMETERS = {
  username: {
    name: "username",
    in: "path",
    description: "The name that needs to be fetched. Use user1 for testing. ",
    required: true,
    type: "string",
    camelCaseName: "username",
    isPathParameter: true,
  }
}
export const getUserByName_META = {
  description: "",
  summary: "Get user by user name",
  operationId: "getUserByName",
  tags: ["user"]
}
export const getUserByName_RAW_URL = function() {
  return '/user/{username}'
}
export const getUserByName_TYPE = function() {
  return 'get'
}
export const getUserByNameURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/user/{username}'
  path = path.replace('{username}', `${parameters['username']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updated user
 * request: updateUser
 * url: updateUserURL
 * method: updateUser_TYPE
 * raw_url: updateUser_RAW_URL
 * @param username - name that need to be updated
 * @param body - Updated user object
 */
export const updateUser = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/user/{username}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{username}', `${parameters['username']}`)
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUser_PARAMETERS = {
  username: {
    name: "username",
    in: "path",
    description: "name that need to be updated",
    required: true,
    type: "string",
    camelCaseName: "username",
    isPathParameter: true,
  },
  body: { in: "body",
    name: "body",
    description: "Updated user object",
    required: true,
    schema: {
      "$ref": "#/definitions/User"
    },
    camelCaseName: "body",
    isBodyParameter: true,
  }
}
export const updateUser_META = {
  description: "This can only be done by the logged in user.",
  summary: "Updated user",
  operationId: "updateUser",
  tags: ["user"]
}
export const updateUser_RAW_URL = function() {
  return '/user/{username}'
}
export const updateUser_TYPE = function() {
  return 'put'
}
export const updateUserURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/user/{username}'
  path = path.replace('{username}', `${parameters['username']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Delete user
 * request: deleteUser
 * url: deleteUserURL
 * method: deleteUser_TYPE
 * raw_url: deleteUser_RAW_URL
 * @param username - The name that needs to be deleted
 * @param petType - The name that needs to be deleted
 */
export const deleteUser = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/user/{username}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{username}', `${parameters['username']}`)
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (config.headers === undefined) {
    config.headers = {}
  }
  if (parameters['petType'] !== undefined) {
    config.headers['petType'] = parameters['petType']
  }
  if (parameters['petType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: petType'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUser_PARAMETERS = {
  username: {
    name: "username",
    in: "path",
    description: "The name that needs to be deleted",
    required: true,
    type: "string",
    camelCaseName: "username",
    isPathParameter: true,
  },
  petType: {
    name: "petType",
    in: "header",
    description: "The name that needs to be deleted",
    required: true,
    type: "string",
    camelCaseName: "petType",
    isHeaderParameter: true,
  }
}
export const deleteUser_META = {
  description: "This can only be done by the logged in user.",
  summary: "Delete user",
  operationId: "deleteUser",
  tags: ["user"]
}
export const deleteUser_RAW_URL = function() {
  return '/user/{username}'
}
export const deleteUser_TYPE = function() {
  return 'delete'
}
export const deleteUserURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/user/{username}'
  path = path.replace('{username}', `${parameters['username']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}