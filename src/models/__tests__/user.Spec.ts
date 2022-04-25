import Model from '../Model';
import Order from '../../types/order.type';
import User from '../../types/user.type';
import Product from '../../types/product.type';

let createdUser: User;
let createProduct: Product;
const product = new Model('products');
const Orders = new Model('orders');

describe('Test User Model Methods', () => {
  const userTest = new Model('users');
  it('Test Create Method', async () => {
    const result = await userTest.create({
      email: 'testEmail@gmail.com',
      firstName: 'firstTest',
      lastName: 'lastTest',
      password: '123456',
    });
    createdUser = result;
    expect(result).toBeInstanceOf(Object);
  });

  it('Test getOne User Method', async () => {
    const result = await userTest.getOne('id', createdUser.id);
    expect(result).toBeInstanceOf(Object);
  });

  it('Test getAll Users Method', async () => {
    const result = await userTest.getAll();
    expect(result).toBeInstanceOf(Array);
  });

  it('Test updateOne User Method', async () => {
    const result = await userTest.updateOne('' + createdUser.id, {
      email: 'test@gmail.com',
      firstName: 'firstTest',
      lastName: 'lastTest',
      password: '123456',
    });
    expect(result).toBeInstanceOf(Object);
  });

  it('Test deleteOne Method', async () => {
    const result = await userTest.deleteOne(
      createdUser.id as unknown as string
    );
    expect(result).toBeInstanceOf(Object);
  });
});
