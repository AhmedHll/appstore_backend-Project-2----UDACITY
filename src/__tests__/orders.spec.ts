import Model from '../models/Model';
import supertest from 'supertest';
import app from '../server';
import jwt from 'jsonwebtoken';
import Order from '../types/order.type';

const order = new Model('orders');
let createdOrder :Order;
const request = supertest(app);

const newOrder = {
  status: 'active || not active',
  user_id: 5,
};

const token = jwt.sign(newOrder, process.env.TOKEN_SECRET as string, {
  expiresIn: '30d',
});

//Testing order Methods
describe('Testing order Methods', () => {
  it('A method that create order', () => {
    expect(order.create).toBeDefined();
  });

  it('A method that get one order', () => {
    expect(order.getOne).toBeDefined();
  });

  it('A method that get all orders', () => {
    expect(order.getAll).toBeDefined();
  });

  it('A method that update order', () => {
    expect(order.updateOne).toBeDefined();
  });

  it('A method that delete order', () => {
    expect(order.deleteOne).toBeDefined();
  });
});

//Testing orders Endpoints
describe('Testing orders Endpoints.', () => {
  it('[POST] /api/orders To create order with providing a token', async () => {
    const newOrder = {
      status: 'active',
      user_id: 5,
    };
    const response = await request
      .post('/api/orders')
      .send(newOrder)
      .set('Cookie', [`token=${token}`]);
      createdOrder = response.body.data;
    expect(response.status).toBe(201);
  });

  it('[PATCH] /api/orders/1 [token require] ', async () => {
    const response = await request.patch('/api/orders/1').send(newOrder);
    expect(response.status).toBe(401);
  });

  it('[PATCH] /api/orders/1 To edit order order by id with providing a token ', async () => {
    const response = await request
      .patch('/api/orders/1')
      .send(newOrder)
      .set('Cookie', [`token=${token}`]);
    expect(response.status).toBe(401);
  });

  it('[PATCH] /api/orders/1 [token require] ', async () => {
    const response = await request.patch('/api/orders/1').send(newOrder);
    expect(response.status).toBe(401);
  });

  it('[GET] /api/orders/1 to get order by id with providing a token', async () => {
    const response = await request
      .get('/api/orders/1')
      .set('Cookie', [`token=${token}`]);
    expect(response.status).toBe(200);
  });

  it('[GET] /api/orders/1 [token require]', async () => {
    const response = await request.get('/api/orders/1');
    expect(response.status).toBe(401);
  });

  it('[GET] /api/orders to get orders with providing a token', async () => {
    const response = await request
      .get('/api/orders')
      .set('Cookie', [`token=${token}`]);
    expect(response.status).toBe(200);
  });

  it('[GET] /api/orders [token require]', async () => {
    const response = await request.get('/api/orders');
    expect(response.status).toBe(401);
  });

  it('[DELETE] /api/orders/1 To delete order by id with providing a token', async () => {
    const response = await request
      .delete(`/api/orders/${createdOrder.id}`)
      .send(newOrder)
      .set('Cookie', [`token=${token}`]);
    expect(response.status).toBe(200);
  });

  it('[DELETE] /api/orders/1 [token require] ', async () => {
    const response = await request.patch(`/api/orders/${createdOrder.id}`).send(newOrder);
    expect(response.status).toBe(401);
  });
});
