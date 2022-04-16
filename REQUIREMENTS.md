# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index ([GET]: `/products`)
- Show ([GET]: `/products/:id`)
- Create ([POST]: `/products/create`)[token required]
- Update [token required] (PUT /api/products/:id)
- Delete [token required] (DELETE /api/products/:id) 

- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index ([GET]: `/users`)[token required]
- Show ([GET]: `/users/:id`)(args: id)[token required]
- Create ([POST]: `/users`)[token required]
- Update ([PUT]: /products/:id) [token required]
- Delete ([DELETE]: /products/:id) [token required]

#### Orders
- Index ([GET]: `/orders`) [token required]
- Show ([GET]: `/orders/:id`) [token required]
- Create ([POST]: `/orders`)
- Update ([PUT]: `/orders/:id`) [token required]
- Delete ([DELETE]: `/orders/:id`) [token required]
- Current Order by user (GET: `\orders\current_orders`)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

```sql
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price numeric DEFAULT 0.00,
    category VARCHAR(50)
)
```

#### User
- id
- firstName
- lastName
- password

```sql
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    password varchar(255) NOT NULL
);
```
#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

<!-- ```sql
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    id_product SERIAL,
    quantity NUMBER,
    user_id integer,
    status VARCHAR(15),
);
```-->

```sql
CREATE TYPE order_status as ENUM ('ACTIVE', 'COMPLETE');

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id INT,
    status order_status,
    CONSTRAINT fk_user 
        FOREIGN KEY(user_id)
		    REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS order_products (
	order_id SERIAL,
	product_id SERIAL,
	quantity INT,
	PRIMARY KEY(product_id, order_id),

	CONSTRAINT fk_product
		FOREIGN KEY(product_id)
			REFERENCES products(id),

	CONSTRAINT fk_order
		FOREIGN KEY(order_id)
			REFERENCES orders(id)
);
```