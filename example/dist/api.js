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
/* Base model all for all definitions */
/**
 * Binds all methods of a class instance to itself.
 */
export const autoBind = function(instance) {
  for (let obj = instance; obj; obj = Object.getPrototypeOf(obj)) {
    // We're the end of the inheritance chain if we've reached 'Object'.
    if (obj.constructor.name === 'Object') {
      return;
    }
    let names = Object.getOwnPropertyNames(obj);
    // Bind each function to the instance.
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      // No need to bind getters, as attempting to access them would also
      // invoke them which is something we don't want to do here.
      if (Object.getOwnPropertyDescriptor(obj, name).get) {
        continue;
      }
      // We're using `defineProperty` here so that we don't make all the
      // class methods enumerable when we replace them.
      if (typeof obj[name] === 'function' && name !== 'constructor') {
        Object.defineProperty(instance, name, {
          value: instance[name].bind(instance),
          enumerable: false,
          configurable: true,
          writable: true
        });
      }
    }
  }
}
/**
 * Reserved keywords that can't be used for attribute or option names.
 */
const RESERVED = [
  '_attributes',
  '_listeners',
  '_uid',
  'attributes',
  'busy'
];
/**
 * Base class for all things common between Model and Collection.
 */
export class Base {
  constructor(data, options) {
    autoBind(this)
    // Define an automatic unique ID. This is primarily to distinguish
    // between multiple instances of the same name and data.
    Object.defineProperty(this, '_uid', {
      value: 'idx_' + (new Date()).getTime(),
      enumerable: false,
      configurable: false,
      writable: false
    });
    this._listeners = {}; // Event listeners
    this._attributes = {}
    this._options = this.defaultOptions(); // Internal option store
    this.setOptions(options);
    this.setData(Object.assign(this.defaults(), data)); // Model attributes
    this._busy = false;
    this._changed = false;
    this._request = null;
    this.boot();
  }
  /**
   * If model process some network requests
   *
   * @return {boolean}
   */
  get busy() {
    return this._busy
  }
  /**
   * If model has changes but yet saved to server
   *
   * @return {boolean}
   */
  get changed() {
    return this._changed
  }
  /**
   * @returns {string} The class name of this instance.
   */
  get $class() {
    return (Object.getPrototypeOf(this)).constructor.name;
  }
  /**
   * Abort network request
   */
  abort() {
    this._busy = false
    this._request.reject()
  }
  /**
   * Called after construction, this hook allows you to add some extra setup
   * logic without having to override the constructor.
   */
  boot() {}
  /**
   * Property refs definitions
   * @return {object}
   */
  refs() {
    return {}
  }
  /**
   * Property paths
   * @return
   */
  types() {
    return {}
  }
  /**
   * Return true if idKey set in property and attributes contains
   * such key and value
   * @return {boolean}
   * @default false
   */
  get isNew() {
    let idKey = this.getOption('idKey')
    if (idKey === undefined) {
      return true
    }
    return !this._attributes[idKey]
  }
  /**
   * Returns the default context for all events emitted by this instance.
   *
   * @returns {Object}
   */
  getDefaultEventContext() {
    return {
      target: this
    }
  }
  has(name) {
    return (Object.keys(this._attributes).indexOf(name) !== -1)
  }
  /**
   * Similar to `saved`, returns an attribute's value or a fallback value
   * if this model doesn't have the attribute.
   *
   * @param {string} attribute
   * @param {*}      fallback
   *
   * @returns {*} The value of the attribute or `fallback` if not found.
   */
  get(attribute, fallback) {
    return this._attributes[attribute] || fallback;
  }
  /**
   * Registers an attribute on this model so that it can be accessed directly
   * on the model, passing through `get` and `set`.
   */
  registerAttribute(attribute) {
    // Protect against unwillingly using an attribute name that already
    // exists as an internal property or method name.
    if (RESERVED.indexOf(attribute) !== -1) {
      throw new Error(`Can't use reserved attribute name '${attribute}'`);
    }
    // Create dynamic accessors and mutations so that we can update the
    // model directly while also keeping the model attributes in sync.
    Object.defineProperty(this, attribute, {
      get: () => this.get(attribute),
      set: (value) => this.setProperty(attribute, value)
    })
  }
  /**
   * @returns {string} Default string representation.
   */
  toString() {
    return `<${this.$class} #${this._uid}>`
  }
  /**
   * @returns {Object} An empty representation of this model.
   *                   It's important that all model attributes have a default
   *                   value in order to be reactive in Vue.
   */
  defaults() {
    return {}
  }
  /**
   * Default model configuration
   */
  defaultOptions() {
    return {
      shouldPatch: false,
      fetchParsePath: 'data',
      saveParsePath: 'data',
      createParsePath: 'data'
    }
  }
  /**
   * Emits an event by name to all registered listeners on that event.

   * Listeners will be called in the order that they were added. If a listener
   * returns `false`, no other listeners will be called.
   *
   * @param {string} event    The name of the event to emit.
   * @param {Object} context  The context of the event, passed to listeners.
   */
  emit(event, context = {}) {
    let listeners = this._listeners[event];
    if (Array.isArray(listeners)) {
      // Create the context for the event.
      context = Object.assign({}, context, this.getDefaultEventContext());
      // Run through each listener. If any of them return false, stop the
      // iteration and mark that the event wasn't handled by all listeners.
      listeners.forEach(function(listener) {
        listener(context)
      })
    }
  }
  /**
   * Registers an event listener for a given event.
   *
   * Event names can be comma-separated to register multiple events.
   *
   * @param {string}   event      The name of the event to listen for.
   * @param {function} listener   The event listener, accepts context.
   */
  on(event, listener) {
    let current = this._listeners[event]
    if (Array.isArray(current)) {
      this._listeners[event].push(listener)
    } else {
      this._listeners[event] = [listener]
    }
  }
  /**
   * @param {Array|string} path     Option path resolved by `_.get`
   * @param {*}            fallback Fallback value if the option is not set.
   *
   * @returns {*} The value of the given option path.
   */
  getOption(path, fallback = null) {
    return this._options[path] || fallback;
  }
  /**
   * @returns {Object} This instance's default options.
   */
  options() {
    return {
      idKey: 'id'
    }
  }
  /**
   * Sets an option.
   *
   * @param {string} path
   * @param {*}      value
   */
  setOption(path, value) {
    this._options[path] = value
    return this
  }
  /**
   * Sets all given options. Successive values for the same option won't be
   * overwritten, so this follows the 'defaults' behaviour, and not 'merge'.
   *
   * @param {...Object} options One or more objects of options.
   */
  setOptions(options) {
    Object.assign(this._options, options)
    return this
  }
  /**
   * Returns all the options that are currently set on this instance.
   *
   * @return {Object}
   */
  getOptions() {
    return this._options || {}
  }
  /**
   * Fetches data from the database/API.
   *
   * @param {options}             Fetch options
   * @param {options.params}      Query params
   * @param {options.headers}     Query headers
   * @returns {Promise}
   */
  fetch(options) {
    let method = this.getOption('fetch', options['method'] || false)
    if (method === false) {
      return Promise.reject('No method specified for fetch method')
    }
    if (typeof method === 'function') {
      return method().then(this.parse)
    }
  }
  /**
   * Set wall attributes
   *
   * @param data {object}
   */
  setData(data) {
    let _this = this
    Object.keys(data).forEach(function(key) {
      _this.setProperty(key, data[key])
    })
  }
  /**
   * Change model property
   *
   * @param attribute
   * @param value
   */
  setProperty(attribute, value) {
    let refs = this.refs()
    let types = this.types()
    let defaults = this.defaults()
    let defined = this.has(attribute)
    if (defined === false && Object.keys(defaults).indexOf(attribute) !== -1) {
      this.registerAttribute(attribute)
    }
    let previous = this.get(attribute, undefined)
    let changed = false
    if (refs[attribute] && types[attribute] === 'array' && Array.isArray(value)) {
      changed = true
      value.forEach(function(item) {
        if (item instanceof refs[attribute]) {
          this._attributes.push(item)
        } else {
          this._attributes.push(new refs[attribute](item))
        }
      })
    } else if (refs[attribute] && types[attribute] === 'ref') {
      changed = true
      this._attributes[attribute] = new refs[attribute](value)
    } else {
      changed = true
      this._attributes[attribute] = value
    }
    if (defined && changed) {
      this.emit('change', {
        attribute,
        previous,
        value
      });
    }
  }
  /**
   * Parse response from web server
   *
   * @param response
   * @param method {string}
   */
  parse(response, method) {
    let path = this.getOption(method + 'ParsePath', 'data')
    let data = response[path]
    let _this = this
    Object.keys(this._attributes).forEach(function(key) {
      if (data[key] === undefined) return
      _this.setProperty(key, data[key])
    })
  }
  /**
   * Persists data to the database/API.
   * @returns {Promise}
   */
  save() {}
  /**
   * Removes model or collection data from the database/API.
   * @returns {Promise}
   */
  delete() {}
}
/**
 * Model for definition #definitions/Order
 * Type: Object
 */
export class Order extends Base {
  refs() {
    return {}
  }
  types() {
    return {
      id: "integer",
      petId: "integer",
      quantity: "integer",
      shipDate: "string",
      status: "string",
      complete: "boolean"
    }
  }
  defaults() {
    return {
      id: null,
      petId: null,
      quantity: null,
      shipDate: "",
      status: "placed", // Order Status , Possible options: [placed, approved, delivered]
      complete: false
    }
  }
}
/**
 * Model for definition #definitions/User
 * Type: Object
 */
export class User extends Base {
  refs() {
    return {}
  }
  types() {
    return {
      id: "integer",
      username: "string",
      firstName: "string",
      lastName: "string",
      email: "string",
      password: "string",
      phone: "string",
      userStatus: "integer"
    }
  }
  defaults() {
    return {
      id: null,
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      userStatus: null // User Status 
    }
  }
}
/**
 * Model for definition #definitions/Category
 * Type: Object
 */
export class Category extends Base {
  refs() {
    return {}
  }
  types() {
    return {
      id: "integer",
      name: "string"
    }
  }
  defaults() {
    return {
      id: null,
      name: ""
    }
  }
}
/**
 * Model for definition #definitions/Tag
 * Type: Object
 */
export class Tag extends Base {
  refs() {
    return {}
  }
  types() {
    return {
      id: "integer",
      name: "string"
    }
  }
  defaults() {
    return {
      id: null,
      name: ""
    }
  }
}
/**
 * Model for definition #definitions/Pet
 * Type: Object
 */
export class Pet extends Base {
  refs() {
    return {
      category: Category,
      tags: Tag,
    }
  }
  types() {
    return {
      id: "integer",
      category: "ref",
      name: "string",
      photoUrls: "array",
      tags: "array",
      status: "string"
    }
  }
  defaults() {
    return {
      id: null,
      category: null,
      name: "",
      photoUrls: [],
      tags: [],
      status: "available" // pet status in the store , Possible options: [available, pending, sold]
    }
  }
}
/**
 * Model for definition #definitions/ApiResponse
 * Type: Object
 */
export class ApiResponse extends Base {
  refs() {
    return {}
  }
  types() {
    return {
      code: "integer",
      type: "string",
      message: "string"
    }
  }
  defaults() {
    return {
      code: null,
      type: "",
      message: ""
    }
  }
}