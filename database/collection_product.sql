USE webshop;

DELETE FROM collection_product;

INSERT INTO collection_product (id, collection_id, product_id)
VALUES
	(1, 1, 2),
    (2, 1, 5),
    (3, 1, 6),
    (4, 1, 8),
    (5, 3, 12),
    (6, 3, 13),
    (7, 3, 14),
    (8, 2, 2),
    (9, 2, 3),
    (10, 2, 11),
    (11, 2, 12);
    
    
    
    
SELECT product.*, collection.name FROM product, collection_product, collection WHERE product.id = collection_product.product_id AND collection_product.collection_id = collection.id;
