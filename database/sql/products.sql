USE webshop;
DELETE FROM product;

INSERT INTO product (id, category, name, price, discount_id, attribute, image)
VALUES
	(1, 'phone', 'Samsung Galaxy S23 Ultra 256Gb', 389999, null, 
    '{"Kijelző": {"kijelző típusa:": "OLED", "kijelző mérete:": "6.8inch"}}', 'https://p1.akcdn.net/full/1102027326.samsung-galaxy-s23-ultra-5g-256gb-8gb-ram-dual-sm-s918b.jpg'),
    (2, 'phone', 'Apple iPhone 15 256Gb', 489999, 5, 
    '{"Kijelző": {"kijelző típusa:": "OLED","kijelző mérete:": "6.5inch"}}', 'https://p1.akcdn.net/gallery/996936880/full/1789705.apple-iphone-15-128gb.jpg'),
    (3, 'phone', 'Samsung Galaxy A54 128Gb', 159999, 4, 
    '{ "Technikai specifikációk:": { "Kijelző típusa:": "OLED", "Kijelző mérete:": "6.4inch", "RAM": "8Gb", "Processzor sebessége:": "2.4 GHz", "Processzormagok száma:": "8magos" }, "Kamera": { "Előlapi kamera:": "32 MPx", "Hátlapi kamera:": "50 MPx, 12 MPx, 5 MPx" }, "Akkumulátor": { "Kapacitás": "5000 mAh", "Típusa": "Li-Pol" } }', 'https://p1.akcdn.net/gallery/938466729/full/1453233.samsung-galaxy-a54-5g-128gb-8gb-ram-dual-sm-a546b.jpg'),
    (4, 'smart_watch', 'Samsung Galaxy Watch6 44mm', 99999, 3, 
    '{ "Technikai specifikációk:": { "Kijelző felbontása:": "480 x 480 pixel", "Kijelző mérete:": "1.47 inch" }, "Akkumulátor": { "Kapacitás": "425 mAh" }, "Egyéb jellemzők": { "Fényképező": "Nincs", "SIM foglalat": "Nincs", "GPS": "Van", "Vízálló": "Igen", "Tömeg": "33 g" } }', 'https://p1.akcdn.net/gallery/983869869/full/1664683.samsung-galaxy-watch6-44mm-bluetooth-sm-r940.jpg'),
    (5, 'smart_watch', 'Apple Watch Series 9 45mm', 204999, 3, 
    '{ "Technikai specifikációk:": { "Kijelző felbontása:": "480 x 480 pixel", "Kijelző mérete:": "1.47 inch" }, "Akkumulátor": { "Kapacitás": "425 mAh" }, "Egyéb jellemzők": { "Fényképező": "Nincs", "SIM foglalat": "Nincs", "GPS": "Van", "Vízálló": "Igen", "Tömeg": "33 g" } }', 'https://p1.akcdn.net/gallery/997299463/full/1848772.apple-watch-series-9-45mm.jpg'),
    (6, 'phone', 'Apple iPhone 14 Pro 128GB', 435999, 6, 
    '{ "Technikai specifikációk:": { "Processzor típusa": "Apple A16 Bionic", "Processzormagok száma:": "6 magos", "RAM": "6 GB", "Belső memória mérete": "128 GB", "Kijelző felbontása:": "2556 x 1179 pixel", "Kijelző mérete:": "6.1 inch", "Képfrissitési frekvencia": "120 Hz" }, "Akkumulátor": { "Kapacitás": "3200 mAh" }, "Kamera": { "Előlapi kamera:": "12 MPx", "Hátlapi kamera:": "48 MPx, 12 MPx, 12 MPx" }, "Egyéb jellemzők": { "SIM foglalat": "Nano-SIM", "GPS": "Van", "Vízálló": "Igen", "Porálló": "Igen" } } ', 'https://p1.akcdn.net/full/1025523558.apple-iphone-14-pro-128gb.jpg'),
    (7, 'phone', 'Samsung Galaxy Z Flip5 5G 512GB', 365999, 6, 
    '{ "Technikai specifikációk:": { "Processzor típusa": "Qualcomm Snapdragon 8 Gen 2", "Processzormagok száma:": "8 magos", "RAM": "8 GB", "Belső memória mérete": "512 GB", "Kijelző felbontása:": "2640 x 1080 pixel", "Kijelző mérete:": "6.7 inch", "Képfrissitési frekvencia": "120 Hz", "Másodlagos kijelző": "3.4 inch, 748 x 720 pixel" }, "Akkumulátor": { "Kapacitás": "3700 mAh" }, "Kamera": { "Előlapi kamera:": "10 MPx", "Hátlapi kamera:": "12 MPx, 12 MPx" }, "Egyéb jellemzők": { "SIM foglalat": "Nano-SIM", "GPS": "Van", "Vízálló": "Igen", "Porálló": "Igen", "Ujjlenyomat olvasó": "Van" } } ', 'https://p1.akcdn.net/full/1174586664.samsung-galaxy-z-flip5-5g-512gb-8gb-ram-dual-sm-f731b.jpg'),
    (8, 'phone', 'Apple iPhone 15 Pro 128GB', 499999, null, 
    '{ "Technikai specifikációk:": { "Processzor típusa": "Apple A17 Pro", "Processzormagok száma:": "6 magos", "RAM": "8 GB", "Belső memória mérete": "128 GB", "Kijelző felbontása:": "2556 x 1179 pixel", "Kijelző mérete:": "6.1 inch", "Képfrissitési frekvencia": "120 Hz" }, "Akkumulátor": { "Kapacitás": "3274 mAh" }, "Kamera": { "Előlapi kamera:": "12 MPx", "Hátlapi kamera:": "48 MPx, 12 MPx, 12 MPx" }, "Egyéb jellemzők": { "SIM foglalat": "Nano-SIM", "GPS": "Van", "Vízálló": "Igen", "Porálló": "Igen" } }', 'https://p1.akcdn.net/full/1191449986.apple-iphone-15-pro-128gb.jpg'),
    (9, 'phone', 'Xiaomi Redmi Note 12 Pro 5G 128GB', 99999, null, 
    '{ "Technikai specifikációk:": { "Processzor típusa": "Mediatek Dimensity 1080 MT6877V", "Processzormagok száma:": "8 magos", "RAM": "8 GB", "Belső memória mérete": "128 GB", "Kijelző felbontása:": "2400 x 1080 pixel", "Kijelző mérete:": "6.67 inch", "Képfrissitési frekvencia": "120 Hz" }, "Akkumulátor": { "Kapacitás": "5000 mAh" }, "Kamera": { "Előlapi kamera:": "16 MPx", "Hátlapi kamera:": "50 MPx, 8 MPx, 2 MPx" }, "Egyéb jellemzők": { "SIM foglalat": "Nano-SIM", "GPS": "Van", "Vízálló": "Igen", "Porálló": "Igen", "Ujjlenyomat olvasó": "Van" } }', 'https://p1.akcdn.net/full/1119872598.xiaomi-redmi-note-12-pro-5g-128gb-6gb-ram-dual.jpg'),
    (10, 'phone', 'Xiaomi Redmi Note 12 Pro+ 5G 256GB', 136999, null, 
    '{ "Technikai specifikációk:": { "Processzor típusa": "MediaTek Dimensity 1080 MT6877V", "Processzormagok száma:": "8 magos", "RAM": "8 GB", "Belső memória mérete": "256 GB", "Kijelző felbontása:": "2400 x 1080 pixel", "Kijelző mérete:": "6.67 inch", "Képfrissitési frekvencia": "120 Hz" }, "Akkumulátor": { "Kapacitás": "5000 mAh" }, "Kamera": { "Előlapi kamera:": "16 MPx", "Hátlapi kamera:": "200 MPx, 8 MPx, 2 MPx" }, "Egyéb jellemzők": { "SIM foglalat": "Nano-SIM", "GPS": "Van", "Vízálló": "Nem", "Porálló": "Igen", "Ujjlenyomat olvasó": "Van" } }', 'https://p1.akcdn.net/gallery/942318282/full/1486227.xiaomi-redmi-note-12-pro-5g-256gb-8gb-ram-dual.jpg'),
    (11, 'phone', 'Xiaomi Redmi Note 12 128GB', 65999, 6, 
    '{ "Technikai specifikációk:": { "Processzor típusa": "Qualcomm Snapdragon 685", "Processzormagok száma:": "8 magos", "RAM": "4 GB", "Belső memória mérete": "128 GB", "Kijelző felbontása:": "2400 x 1080 pixel", "Kijelző mérete:": "6.67 inch", "Képfrissitési frekvencia": "120 Hz" }, "Akkumulátor": { "Kapacitás": "5000 mAh" }, "Kamera": { "Előlapi kamera:": "13 MPx", "Hátlapi kamera:": "50 MPx, 8 MPx, 2 MPx" }, "Egyéb jellemzők": { "SIM foglalat": "Nano-SIM", "GPS": "Van", "Vízálló": "Nem", "Porálló": "Igen", "Ujjlenyomat olvasó": "Van" } }', 'https://p1.akcdn.net/gallery/942602520/full/1467591.xiaomi-redmi-note-12-128gb-4gb-ram-dual.jpg'),
    (12, 'tv', 'Samsung QE55Q60CAU', 225999, 2, 
    '{ "Képernyő:": { "TV típusa": "QLED", "Képátló (cm)": "139 cm", "Képátló (inch)" : "55 inch", "Ívelt kijelző": "Nincs", "Képarány": "16:9", "HD felbontás": "Ultra HD (4K TV)", "Felbontás": "3840 x 2160 pixel" }, "Funkciók:": { "HDMI-CEC támogatás": "Van", "Böngésző": "Van", "Operációs rendszer": "Tizen" } }', 'https://p1.akcdn.net/full/1121548077.samsung-qe55q60cau.jpg'),
    (13, 'tv', 'LG OLED55C21LA', 440999, null, 
    '{ "Képernyő:": { "TV típusa": "OLED", "Képátló (cm)": "139 cm", "Képátló (inch)" : "55 inch", "Ívelt kijelző": "Nincs", "Képarány": "16:9", "HD felbontás": "Ultra HD (4K TV)", "Felbontás": "3840 x 2160 pixel" }, "Funkciók:": { "HDMI-CEC támogatás": "Van", "Böngésző": "Van", "Operációs rendszer": "webOS" } } ', 'https://p1.akcdn.net/thumb/965689929.lg-oled55c21la.jpg'),
    (14, 'tv', 'LG NanoCell 50NANO763QA', 169999, 6, 
    '{ "Képernyő:": { "TV típusa": "LED", "Képátló (cm)": "127 cm", "Képátló (inch)" : "50 inch", "Ívelt kijelző": "Nincs", "Képarány": "16:9", "HD felbontás": "Ultra HD (4K TV)", "Felbontás": "3840 x 2160 pixel" }, "Funkciók:": { "HDMI-CEC támogatás": "Van", "Böngésző": "Van", "Operációs rendszer": "webOS" } }', 'https://p1.akcdn.net/full/965689635.lg-nanocell-50nano763qa.jpg');
    
SELECT * FROM product;

-- UPDATE product
-- SET
-- 	  name = 'idk',
--    category = 'tv',
--    price = '12000',
-- 	  discount_id = '4',
--    image = ''
-- WHERE id = 48;


SELECT * FROM user;

DELETE FROM admin;
INSERT INTO admin (user_id) VALUES (1), (2);
SELECT * FROM admin;

SELECT count(email) FROM user, admin WHERE user.id = admin.user_id AND user.email LIKE "idk@idk.com" GROUP BY email;

DELETE FROM product WHERE id = 50;

SELECT * FROM products, collection, collection_product WHERE collection.id = collection_product.collection_id AND 


