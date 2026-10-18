# admaintenance

Karbantartás / „hamarosan” oldal. Az [adlanding](https://github.com/adglobalapp/adlanding) letisztult fekete–piros arculatára épül.

**Stack:** React 19 · TypeScript · CSS (custom property tokenek) · Vite

## Futtatás

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # típusellenőrzés + production build a dist/ mappába
npm run preview   # a build kiszolgálása
```

## Arculat cseréje

Minden lecserélhető dolog egy-egy helyen van:

- **Színek, betűk, méretek:** `src/styles/tokens.css` – az egész oldal ezekből a változókból dolgozik. A betűtípusokat az `index.html` tölti be (Google Fonts).
- **Logó:** `src/brand.ts` → `logoSrc` (pl. `'/logo.svg'` a `public/` mappából). Amíg üres, a szöveges placeholder logó látszik. A favicon: `public/favicon.svg`.
- **Név, elérhetőségek, közösségi linkek:** `src/brand.ts`.

## Felépítés

```
src/
  brand.ts            # név, logó, e-mail, közösségi linkek
  content.ts          # a teljes szöveges tartalom 3 nyelven (EN · ES · HU)
  styles/tokens.css   # design tokenek (szín, tipográfia, spacing, radius, motion)
  styles/base.css     # reset, globális elemek, utility osztályok
  components/         # Header, Maintenance, Footer, Logo, Icon
```
