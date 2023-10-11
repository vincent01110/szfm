USE webshop;

DELETE FROM discount;

INSERT INTO discount (id, percentage)
VALUES
	(1, 45),
    (2, 10),
    (3, 20),
    (4, 25),
    (5, 12),
    (6, 5);
    
    
    
SELECT * FROM discount;
