import Model from '../models/Model';
import app from '../server';

const product = new Model('product');
//Testing Product Methods
describe('Testing Product Methods', () => {
  it('A method that create user', () => {
    expect(product.create).toBeDefined();
  });

  it('A method that get one product', () => {
    expect(product.getOne).toBeDefined();
  });

  it('A method that get all products', () => {
    expect(product.getAll).toBeDefined();
  });

  it('A method that update product', () => {
    expect(product.updateOne).toBeDefined();
  });

  it('A method that delete product', () => {
    expect(product.deleteOne).toBeDefined();
  });
});
