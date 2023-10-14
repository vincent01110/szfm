USE webshop;

DELETE FROM order_details;

INSERT INTO order_details (id, user_id, total, payment_id)
VALUES
	(1, 1, 469998, 1),
    (2, 2, 663998, 2),
    (3, 3, 203399, 3);
    
    
SELECT * FROM order_details;

SELECT product.* FROM order_items, product WHERE order_items.product_id = product.id AND order_items.order_id = 1;
