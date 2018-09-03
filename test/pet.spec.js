import {findPetsByStatus} from '../example/dist/api'

it("get list of pets", async () => {
  // setup
  let response = await findPetsByStatus({status: 'available'})
  
  expect(response).toBeDefined()
  expect(Array.isArray(response.data)).toBeTruthy()
  
  // First one must be a Max
  let first = response.data[0]
  expect(first).toBeDefined()
  expect(first.name === 'Max').toBeTruthy()
});
