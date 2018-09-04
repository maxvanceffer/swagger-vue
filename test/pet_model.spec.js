import {Pet, Tag, Category} from '../example/dist/api'

describe('Pet Model', () => {
  
  it("Create new model Pet", () => {
    let pet = new Pet()
    expect(pet.isNew).toBe(true)
    expect(pet.busy).toBe(false)
  });
  
  it("Create new model Pet and set Category", () => {
    let model = {category: {name: 'Home pet', id: 1}}
    let pet = new Pet(model)
    
    expect(pet.category.name).toBe(model.category.name)
    expect(pet.category.id).toBe(model.category.id)
    expect(pet.category instanceof Category).toBe(true)
    
    let category = new Category()
    category.name = 'Alone pet'
    category.id = 1
    
    pet.setProperty('category', category)
    expect(pet.category instanceof Category).toBe(true)
  });
})
