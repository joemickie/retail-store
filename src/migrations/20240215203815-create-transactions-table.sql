CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id),
    payment_gateway_transaction_id VARCHAR(255),
    amount NUMERIC(10, 2) NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);