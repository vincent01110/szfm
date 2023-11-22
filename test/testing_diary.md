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
  - **Description**: App felület, cart, cart-item, CartItem komponens funkcionalitás és renderelés ellenőrzése.
  - **Steps to Reproduce**: Mockolunk egy item komponenst, hogy betöltődik-e majd a "törlés" gomb működését teszteljük.
  - **Expected Outcome**: A komponens helyesen betöltődik és működik a törlés gomb.

**Test Case 5:**
  - **Description**: Home felület, categories, CategoriesPanel komponensének működésének tesztje.
  - **Steps to Reproduce**: Meghívjuk a setActive függvényt, hogy megnézzük aktívvá teszi-e a kiválasztott ketegóriákat.
  - **Expected Outcome**: A függvény megfelelően választja ki a kategóriákat.

**Test Case 6:**
  - **Description**: Home felület, Footer komponens tesztje.
  - **Steps to Reproduce**: Kontakt információk és logó ellenőrzése.
  - **Expected Outcome**: A kontakt információk helyesek és megjelenik a logó.

**Test Case 7:**
  - **Description**: Home felület, search-bar, SuggestioItem komponens teszt.
  - **Steps to Reproduce**: Elkezdünk gépelni és lehetséges találatot dob ki a rendszer. Erre mockolunk egy terméket létrehozunk és imitáljuk a szóközt, hogy                                   dobjon találatot.
  - **Expected Outcome**: Elvárt módon találatot ajánl.

**Test Case 8:**
  - **Description**: Home felület, most-searched, MostSearchedProduct komponens teszt.
  - **Steps to Reproduce**: Mockoljuk a terméket, hogy megjelenik-e megfelelően.
  - **Expected Outcome**: Megfelelően megjelenik a termék.

**Test Case 9:**
  - **Description**: Product felület, product-desc, ProductDesc komponens teszt.
  - **Steps to Reproduce**: Leellenőrizzük, hogy a komponens rendelkezik-e az értékekkel, és a töltő animáció megfelelően megjelenik töltés közben.
  - **Expected Outcome**: A komponens tartalmazza az információkat és megjelenik az animáció.

**Test Case 10:**
  - **Description**: UI felület, Button komponens tesztje.
  - **Steps to Reproduce**: Ellenőrizzük, hogy a gomb betöltődött-e a megfelelő osztállyal és értékekkel.
  - **Expected Outcome**: Megfelelően működik.

**Test Case 11:**
  - **Description**: UI felület, Card komponens tesztje.
  - **Steps to Reproduce**: Ellenőrizzük, hogy a card betöltődött-e és kattintásra dob-e errort.
  - **Expected Outcome**: Megfelelően működik.

## Test Results

| Date       | Component      | Test Case        | Outcome |
|------------|----------------|------------------|---------|
| 2023-11-06 | Collections-Table| Rendering      | FAIL    |
| 2023-11-20 | Admin-Dashboard| Rendering      | FAIL    |
| 2023-11-20 | CollectionsToolbar| Pahtname matches      | PASS    |
| 2023-11-22 | CartItem | Rendering and button test  | PASS    |
| 2023-11-22 | CategoriesPanel | setActive function | PASS    |
| 2023-11-22 | Footer | Contract and logo | PASS    |
| 2023-11-22 | SuggestionItem | Mock suggestion | PASS    |
| 2023-11-22 | MostSearchedProduct | Rendering | PASS    |
| 2023-11-22 | ProductDesc | Values and loading | PASS    |
| 2023-11-22 | Button | Rendering | PASS  |
| 2023-11-22 | Card | Rendering | PASS  |

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
