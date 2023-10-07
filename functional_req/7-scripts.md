# Forgatókönyvek

## Forgatókönyv neve: Felhasználó regisztrációja és bejelentkezése

### Szereplők:

Felhasználó (User)

Webshop rendszer (System)

### Előfeltételek:

A felhasználó még nem regisztrált a webshopon.
A webshop elérhető és működőképes.


### Fő cselekmény:

A felhasználó eléri a webshopot a böngészőjében.

A webshop kezdőoldala jelenik meg, ahol a "Bejelentkezés" és "Regisztráció" lehetőségek között választhat.

A felhasználó rákattint a "Regisztráció" gombra.

A rendszer egy űrlapot jelenít meg a következő mezőkkel: név, e-mail cím, jelszó, jelszó megerősítése stb.

A felhasználó kitölti az űrlapot a megfelelő adatokkal.

A felhasználó elküldi az űrlapot a "Regisztráció" gombra kattintva.

A rendszer ellenőrzi az adatokat, és ha minden rendben van, létrehozza a felhasználói fiókot.

A felhasználó átirányításra kerül a bejelentkezési oldalra.

A felhasználó beírja az e-mail címét és a jelszavát a bejelentkezéshez.

A rendszer ellenőrzi a bejelentkezési adatokat, és ha helyesek, engedélyezi a felhasználót a webshop használatához.

A felhasználó belép a webshopba, és hozzáfér a fiókjához és a termékekhez.

### Utófeltételek:

A felhasználó regisztrált és bejelentkezett a webshopba.
A felhasználó hozzáfér a webshop összes funkcionalitásához.

Ez a forgatókönyv egy egyszerű példa a "Regisztráció és bejelentkezés" használati esetére. Más használati esetekhez hasonlóképpen kidolgozhatók forgatókönyvek, amelyek részletesen bemutatják a felhasználói vagy rendszerinterakciókat a webshopon belül. Ezek a forgatókönyvek segítenek a fejlesztőknek és a projektmenedzsereknek jobban megérteni, hogy hogyan fog működni a webshop a valóságban, és lehetőséget adnak a tervezési és tesztelési folyamatok hatékonyabb végrehajtására.


## Forgatókönyv neve: Termék vásárlása a webshopban

### Szereplők:

Felhasználó (User)

Webshop rendszer (System)

Termékek adatbázisa (Product Database)

Pénzforgalmi rendszer (Payment System)

Szállítási szolgáltató (Shipping Provider)

### Előfeltételek:

A felhasználó regisztrált és bejelentkezett a webshopban.
A felhasználó kosárba helyezett termékeket.

### Fő cselekmény:

A felhasználó a bejelentkezett állapotban van a webshopban.

A felhasználó az oldal tetején található "Kosár" vagy "Pénztár" gombra kattint, hogy elérje a vásárlási kosarat.

A rendszer megjeleníti a kosár tartalmát, beleértve a kiválasztott termékeket, azok mennyiségét és az összesített árat.

A felhasználó ellenőrzi és módosítja szükség esetén a kosár tartalmát.

A felhasználó kiválasztja a fizetési módot (pl. hitelkártya, PayPal stb.) és megadja a szükséges fizetési információkat.

A rendszer továbbítja a fizetési információkat a pénzforgalmi rendszernek, ami ellenőrzi a tranzakciót.

Ha a fizetés sikeres, a rendszer visszaigazolást küld a felhasználónak e-mailben és a webshopon belül.

A rendszer továbbítja a rendelést a termékek adatbázisának, hogy azokat a raktárból elkészítsék a szállításhoz.

A rendszer továbbítja a szállítási információkat a szállítási szolgáltatónak, beleértve a szállítási címet és a fizetési adatokat.

A szállítási szolgáltató elkezdi a termékek szállítását a megadott címre.

A felhasználó a webshopban követheti a rendelése állapotát, és értesül a szállítás várható érkezéséről.

### Utófeltételek:

A felhasználó sikeresen vásárolt termékeket a webshopból.
A fizetés sikeresen feldolgozásra került.
A termékek elindultak a szállítási szolgáltató felé.

Ez a forgatókönyv bemutatja a vásárlási folyamatot a webshopban, kezdve a kosár összeállításával, a fizetési folyamaton keresztül egészen a termékek szállításáig. A konkrét webshop és a rendelkezésre álló technológia függvényében további részletek és lépések is hozzáadhatók a folyamathoz.


## Forgatókönyv neve: Termékek kezelése az adminisztrációs felületen

### Szereplők:

Adminisztrátor (Administrator)

Webshop rendszer (System)

### Előfeltételek:

Az adminisztrátor be van jelentkezve az adminisztrációs felületre.
A webshop rendszer elérhető és működőképes.

### Fő cselekmény:

Az adminisztrátor bejelentkezik az adminisztrációs felületre, és belép a vezérlőpultba.

A vezérlőpulton számos lehetőség található, de az adminisztrátor a "Termékek kezelése" lehetőséget választja.

Az adminisztrátor átkerül a termékek kezelésére szolgáló oldalra, ahol láthatja a jelenlegi termékeket és lehetőségeket választhat.

Az adminisztrátor új terméket adhat hozzá azáltal, hogy kitölti az űrlapot a termék adataival, mint például a neve, leírása, ára, kategóriája stb. Ezután elküldi az űrlapot.

A rendszer ellenőrzi az adatokat, és hozzáadja az új terméket a termékadatbázishoz.

Az adminisztrátor lehetőséget kap a meglévő termékek szerkesztésére vagy eltávolítására, módosítva például az árat vagy a leírást.

Az adminisztrátor frissíti a termékadatokat, majd elküldi a változásokat a rendszernek.

### Utófeltételek:

Az adminisztrátor hatékonyan kezeli a termékeket az adminisztrációs felületen.
A termékek adatbázisa naprakész és pontos.

Ez a forgatókönyv bemutatja, hogy hogyan használhatja az adminisztrátor az adminisztrációs felületet a termékek kezelésére a webshopban. Az adminisztrátor számos feladatot végezhet el az adminisztrációs felületen, például termékek hozzáadása, szerkesztése és eltávolítása, valamint azok adatainak frissítése. A konkrét adminisztrációs felület és a rendelkezésre álló funkciók függvényében további részletek és lépések is hozzáadhatók a folyamathoz.