USE webshop;

DELETE FROM product;

INSERT INTO product (id, category, name, price, discount_id, attribute, image)
VALUES
	('1', 'phone', 'Samsung Galaxy S23 Ultra 256Gb', 389999, null, 
    '{"Kijelző": {"kijelző típusa:": "OLED", "kijelző mérete:": "6.8inch"}}', ''),
    ('2', 'phone', 'Apple iPhone 15 256Gb', 489999, 5, 
    '{"Kijelző": {"kijelző típusa:": "OLED","kijelző mérete:": "6.5inch"}}', ''),
    ('3', 'phone', 'Samsung Galaxy A54 128Gb', 159999, 4, 
    '{ "Technikai specifikációk:": { "Kijelző típusa:": "OLED", "Kijelző mérete:": "6.4inch", "RAM": "8Gb", "Processzor sebessége:": "2.4 GHz", "Processzormagok száma:": "8magos" }, "Kamera": { "Előlapi kamera:": "32 MPx", "Hátlapi kamera:": "50 MPx, 12 MPx, 5 MPx" }, "Akkumulátor": { "Kapacitás": "5000 mAh", "Típusa": "Li-Pol" } }', ''),
    ('4', 'smart_watch', 'Samsung Galaxy Watch6 44mm', 99999, 3, 
    '{ "Technikai specifikációk:": { "Kijelző felbontása:": "480 x 480 pixel", "Kijelző mérete:": "1.47 inch" }, "Akkumulátor": { "Kapacitás": "425 mAh" }, "Egyéb jellemzők": { "Fényképező": "Nincs", "SIM foglalat": "Nincs", "GPS": "Van", "Vízálló": "Igen", "Tömeg": "33 g" } }', ''),
    ('5', 'smart_watch', 'Apple Watch Series 9 45mm', 204999, 3, 
    '{ "Technikai specifikációk:": { "Kijelző felbontása:": "480 x 480 pixel", "Kijelző mérete:": "1.47 inch" }, "Akkumulátor": { "Kapacitás": "425 mAh" }, "Egyéb jellemzők": { "Fényképező": "Nincs", "SIM foglalat": "Nincs", "GPS": "Van", "Vízálló": "Igen", "Tömeg": "33 g" } }', '');
    
    
SELECT * FROM product;

SELECT * FROM product WHERE product.name LIKE "%Sam%";