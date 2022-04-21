import Model from '../models/Model';
import supertest from 'supertest';
import app from '../server';
import userModel from '../models/userModel';
import jwt from 'jsonwebtoken';

const user = new Model('user');

const request = supertest(app);

const newUser = {
  firstName: 'first',
  lastName: 'last',
  password: '12345678',
};

const token = jwt.sign(newUser, process.env.TOKEN_SECRET as string, {
  expiresIn: '30d',
});

//Testing User Methods
describe('Testing User Methods', () => {
  it('A method that create user', () => {
    expect(user.create).toBeDefined();
  });

  it('A method that get one user', () => {
    expect(user.getOne).toBeDefined();
  });

  it('A method that get all users', () => {
    expect(user.getAll).toBeDefined();
  });

  it('A method that update user', () => {
    expect(user.updateOne).toBeDefined();
  });

  it('A method that delete user', () => {
    expect(user.deleteOne).toBeDefined();
  });
});

//Testing Users Endpoints
describe('Testing Users Endpoints.', () => {
  it('GET /users by id', async () => {
    const response = await request.get('/api/users/1');
    expect(response.status).toBe(200);
  });

  it('GET /users with providing a token', async () => {
    const response = await request
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
});
