# Testing Diary

## Test Plan
Ezen tesztterv célja az alkalmazás komponenseinek egységtesztelése. A tesztelés segít ellenőrizni, hogy a komponensek megfelelően működnek-e a várakozásoknak megfelelően. Az egységtesztek kizárólag a komponensek izolált részeire koncentrálnak.

## Test Cases
**Test Case 1:**
  - **Description**: Admin felület, admin collections-nak a collestions-table funkciója lesz tesztelve.
  - **Steps to Reproduce**: Ebben a tesztesetben először elkészítjük a szükséges collections prop-ot, majd a komponenst rendereljük ezzel a prop-pal. Végül     ellenőrizzük, hogy a komponens megfelelően renderelődik-e és tartalmazza-e a megfelelő szövegeket vagy elemeket.
  - **Expected Outcome**: A komponens megfelelően renderelődik és tartalmazza a megfelelő szövegeket vagy elemeket.
    
**Test Case 2:**
  - **Description**: Admin felület, admin dashboard komponenseinek a tesztjei.
  - **Steps to Reproduce**: Mockolással érjük volna el az API-t a megfelelő rendelerelés érdekében.
  - **Expected Outcome**: A komponens megfelelően renderelődik és tartalmazza a megfelelő szövegeket vagy elemeket.

 **Test Case 3:**
  - **Description**: Admin felület, CollectionsToolbar add button helyes útvonala megnyomás után.
  - **Steps to Reproduce**: Megnézzük, hogy megnyomás után a helyes útvonalra mutat-e a gomb.
  - **Expected Outcome**: A komponens a helyes útvonalra mutat.

**Test Case 4:**
  - **Description**: Admin felület, admin-products Button komponens gombok megfelelő működése.
  - **Steps to Reproduce**: Mockoljuk a gombok működését és szimuláljuk ezeket egy ablakban.
  - **Expected Outcome**: A gombok helyesen működnek és a megfelelő funkciót látják el.

**Test Case 5:**
  - **Description**: Admin-products, product-table, ProductTable komponensének megfelelő renderelése mock-val.
  - **Steps to Reproduce**: Komponens és termékek mockolása majd ezeknek ellenőrzése, hogy renderelődik-e.
  - **Expected Outcome**: Termékek helyesen betöltenek és működik a kiválasztás szimulálása.

**Test Case 6:**
  - **Description**: App, cart, cart-item komponensének renderelése és törlés gomb működésének ellenőrzése.
  - **Steps to Reproduce**: Komponens és termékek mockolása majd ezeknek ellenőrzése, hogy renderelődik-e, majd törlés gomb működésének ellenőrzése.
  - **Expected Outcome**: Termékek helyesen betöltenek és működik a törlés gomb.

## Test Results

| Date       | Component      | Test Case        | Outcome |
|------------|----------------|------------------|---------|
| 2023-11-06 | Collections-Table| Rendering      | FAIL    |
| 2023-11-20 | Admin-Dashboard| Rendering      | FAIL    |
| 2023-11-20 | CollectionsToolbar| Pahtname matches      | PASS    |
| 2023-11-20 | Buttons| Mocking the function  | PASS    |
| 2023-11-21 | Products| Mocking the products  | PASS    |
| 2023-11-21 | Cart items | Mocking the items  | PASS    |


## Issues and Observations
**Issue: Collections-table**
  - **Description**: Az egyik teszt vagy a tesztelt modul az import kulcsszót használja, amit nem támogat a Node.js a fájlokban, amik nem modulok.
  - **Steps to Reproduce**: Próbáltam futtatni a Collections-table komponens tesztelését.
  - **Severity**: Alacsony

**Issue: Admin-dashboard**
  - **Description**: Az egyik teszt vagy a tesztelt modul az import kulcsszót használja, amit nem támogat a Node.js a fájlokban, amik nem modulok.
  - **Steps to Reproduce**: Próbáltam futtatni a admin-dashboard komponens tesztelését. import axios szintaxissal van baja a tesztnek, mivel a jest nem képes ES6 típusú import szintaxot kezelni.
  - **Severity**: Alacsony

## Improvements
**Improvement for Collections-table:**
  - **Description**: Node.js esetleges fájlt ES6 modulként beállítani.
  - **Rationale**: Sikeres teszt kimenetel érdekében.

**Improvement for Admin-dashboard:**
  - **Description**: Node.js esetleges fájlt ES6 modulként beállítani.
  - **Rationale**: Sikeres teszt kimenetel érdekében.
