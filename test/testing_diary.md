# Testing Diary

## Test Plan
Ezen tesztterv célja az alkalmazás komponenseinek egységtesztelése. A tesztelés segít ellenőrizni, hogy a komponensek megfelelően működnek-e a várakozásoknak megfelelően. Az egységtesztek kizárólag a komponensek izolált részeire koncentrálnak.

## Test Cases
**Test Case 1:**
  - **Description**: Admin felület, admin collections-nak a collestions-table funkciója lesz tesztelve.
  - **Steps to Reproduce**: Ebben a tesztesetben először elkészítjük a szükséges collections prop-ot, majd a komponenst rendereljük ezzel a prop-pal. Végül     ellenőrizzük, hogy a komponens megfelelően renderelődik-e és tartalmazza-e a megfelelő szövegeket vagy elemeket.
  - **Expected Outcome**: A komponens megfelelően renderelődik és tartalmazza a megfelelő szövegeket vagy elemeket.

## Test Results

| Date       | Component      | Test Case        | Outcome |
|------------|----------------|------------------|---------|
| 2023-11-06 | Collections-Table| Rendering      | FAIL    |

## Issues and Observations
**Issue: Collections-table**
  - **Description**: Az egyik teszt vagy a tesztelt modul az import kulcsszót használja, amit nem támogat a Node.js a fájlokban, amik nem modulok.
  - **Steps to Reproduce**: Próbáltam futtatni a Collections-table komponens tesztelését.
  - **Severity**: Alacsony

## Improvements
**Improvement for Collections-table:**
  - **Description**: Node.js esetleges fájlt ES6 modulként beállítani.
  - **Rationale**: Sikeres teszt kimenetel érdekében.