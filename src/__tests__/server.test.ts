import server from '..';
import db from '../config/db';
import request from 'supertest';

afterAll(async () => {
  await db.close();
  server.close();
});

describe('Products API tests', () => {
  it('should return error if name is empty or price is a non greater than 0', async () => {
    const res = await request(server).post('/products').send({
      name: '',
      price: 12,
      availability: true,
    });

    expect(res.status).toBe(400);

    expect(res.body).toHaveProperty('error');

    const res1 = await request(server).post('/products').send({
      name: 'from testing',
      price: 0,
      availability: true,
    });

    expect(res1.status).toBe(400);

    expect(res1.body).toHaveProperty('error');
  });

  it('should create a new product', async () => {
    const res = await request(server).post('/products').send({
      name: 'from testing',
      price: 12,
      availability: true,
    });

    expect(res.status).toBe(201);

    expect(res.body.data).toHaveProperty('id');

    expect(res.body.data.name).toBe('from testing');
  });

  it('should get product', async () => {
    const res = await request(server).get('/products');

    const hasRecord = res.body.data.some(
      (record: any) => record.name === 'from testing'
    );

    expect(res.status).toBe(200);

    expect(hasRecord).toBeTruthy();
  });

  it('should get a product by id', async () => {
    const res = await request(server).get('/products/');
    const recordId = res.body.data[0].id;

    const res1 = await request(server).get(`/products/${recordId}`);

    expect(res1.status).toBe(200);

    expect(res1.body.data.id).toEqual(recordId);
  });

  it('should update a product', async () => {
    const res = await request(server).get('/products/');
    const recordId = res.body.data[0].id;

    const res1 = await request(server).put(`/products/${recordId}`).send({
      name: 'from testing updated record',
      price: 13,
      availability: true,
    });

    expect(res1.status).toBe(200);

    expect(res1.body.data.name).toEqual('from testing updated record');
  });

  it('should delete a product ', async () => {
    const res = await request(server).get('/products/');
    const recordId = res.body.data[0].id;

    const res1 = await request(server).delete(`/products/${recordId}`);

    expect(res1.status).toBe(200);

    expect(res1.body.data.id).toBeUndefined();
  });
});
