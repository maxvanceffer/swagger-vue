/* eslint-disable */
import jest from 'jest'
import {findPetsByStatus_RAW_URL} from '../../example/dist/api'
import find_by_status from './responses/findPetsByStatus'

module.exports = {
  get: jest.fn ((url) => {
    if (url === findPetsByStatus_RAW_URL ()) {
      return Promise.resolve ({
        data: find_by_status
      })
    }
  }),
  post: jest.fn ((url) => {
    if (url === '/something') {
      return Promise.resolve ({
        data: 'data'
      });
    }
    if (url === '/something2') {
      return Promise.resolve ({
        data: 'data2'
      });
    }
  }),
  create: jest.fn (function () {
    return this;
  })
};
