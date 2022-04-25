import Model from '../Model';
import Order from '../../types/order.type';

let createdOrder: Order;

describe('Test Orders Model Methods', () => {
  const orderTest = new Model('orders');
  it('Test Create Order Method', async () => {
    const result = await orderTest.create({
      status: 'active',
      user_id: 1,
    });
    createdOrder = result;
    expect(result).toBeInstanceOf(Object);
  });

  it('Test getOne Order Method', async () => {
    const result = await orderTest.getOne('id', createdOrder.id);
    expect(result).toBeInstanceOf(Object);
  });

  it('Test getAll Orders Method', async () => {
    const result = await orderTest.getAll();
    expect(result).toBeInstanceOf(Array);
  });

  it('Test updateOne Order Method', async () => {
    const result = await orderTest.updateOne('' + createdOrder.id, {
      status: 'active',
      user_id: 1,
    });
    expect(result).toBeInstanceOf(Object);
  });

  it('Test deleteOne Method', async () => {
    const result = await orderTest.deleteOne(
      createdOrder.id as unknown as string
    );
    expect(result).toBeInstanceOf(Object);
  });
});
