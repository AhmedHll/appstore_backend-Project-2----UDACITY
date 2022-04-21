CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(15),
    -- order_products BIGINT REFERENCES order_products(id) NOT NULL,
    user_id BIGINT REFERENCES users(id));