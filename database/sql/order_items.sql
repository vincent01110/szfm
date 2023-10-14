USE webshop;

DELETE FROM order_items;

INSERT INTO order_items (id, product_id, order_id)
VALUES
	(1, 1, 1),
    (2, 4, 1),
    (3, 5, 2),
    (4, 8, 2),
    (5, 12, 3);
    
    
    
SELECT * FROM order_items;

SELECT * FROM user;
