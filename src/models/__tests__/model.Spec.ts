import Model from '../Model';
import Order from '../../types/order.type';
import User from '../../types/user.type';
import Product from '../../types/product.type';

describe('Test every Method of Model', () => {
  const userTest = new Model('users');
  it('Test Create Method', async () => {
    const result = await userTest.create({
      email: 'testEmail@gmail.com',
      firstName: 'firstTest',
      lastName: 'lastTest',
      password: '123456',
    });
    expect(result).toBeInstanceOf(Object);
  });

  it('Test getAll Method', async () => {
    const result = await userTest.getAll();
    expect(result).toBeInstanceOf(Array);
  });

  it('Test getOne Method', async () => {
    const result = await userTest.getOne('id', 1);
    expect(result).toBeInstanceOf(Object);
  });

  it('Test updateOne Method', async () => {
    const result = await userTest.updateOne('id', {
      email: 'test@gmail.com',
      firstName: 'firstTest',
      lastName: 'lastTest',
      password: '123456',
    });
    expect(result).toBeInstanceOf(Object);
  });

  it('Test deleteOne Method', async () => {
    const result = await userTest.deleteOne('10'); //make sure the id of user you want to test is exist and don't link with foreign key.
    expect(result).toBeInstanceOf(Object);
  });

  it('Test addProduct Method', async () => {
    const result = await userTest.addProduct(1, '1', '1');
    expect(result).toBeInstanceOf(Object);
  });
});
