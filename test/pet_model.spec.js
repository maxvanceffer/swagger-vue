import {Pet, Tag, Category} from '../example/dist/api'

describe('Pet Model', () => {
  
  it("Create new model Pet", () => {
    let pet = new Pet()
    expect(pet.isNew).toBe(true)
    expect(pet.busy).toBe(false)
    expect(pet.$class).toBe('Pet')
    expect(pet.changed).toBe(false)
  });
  
  it("Create new model Pet and set Category", () => {
    let event = jest.fn()
    let model = {category: {name: 'Home pet', id: 1}}
    let pet = new Pet(model)
    pet.on('change', event)
    
    expect(pet.category.name).toBe(model.category.name)
    expect(pet.category.id).toBe(model.category.id)
    expect(pet.category instanceof Category).toBe(true)
    
    // Because model just created, and in fact all
    // data was set first time
    expect(event.mock.calls.length).toBe(0)
    
    let category = new Category()
    category.name = 'Alone pet'
    category.id = 1
    
    pet.setProperty('category', category)
    expect(pet.category instanceof Category).toBe(true)
    
    // Because we changed property one time category
    expect(event.mock.calls.length).toBe(1)
    expect(event.mock.calls[0][0].attribute).toBe('category')
  });
})
