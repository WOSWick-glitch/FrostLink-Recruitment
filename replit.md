# FrostLink

Premier recruitment platform for Whiteout Survival. Players can browse states, join alliances, recruit talent, and track transfers.

## Architecture

Full-stack React + Express application with PostgreSQL database.

- **Frontend**: React 18, Vite, Tailwind CSS, shadcn/ui, Wouter routing, TanStack Query
- **Backend**: Express.js REST API
- **Database**: PostgreSQL with Drizzle ORM
- **Design**: Dark/metallic sci-fi aesthetic, cyan primary `rgba(0,229,255)`, RuneScape-style stat boxes, font-display headings

## Project Structure

```
client/src/
  pages/           - Route pages (Home, Players, PlayerProfile, Alliances, AllianceProfile, States, StateProfile, TransferTracker, Apply, Premium)
  components/
    layout/        - Navbar
    ui/            - shadcn components
  lib/
    queryClient.ts - TanStack Query config
    utils.ts       - Tailwind merge utils
shared/
  schema.ts        - Drizzle schema + Zod insert schemas (states, alliances, players, transferGroups)
server/
  db.ts            - Database connection (DATABASE_URL)
  storage.ts       - IStorage interface + DatabaseStorage implementation
  routes.ts        - Express API routes (/api/states, /api/alliances, /api/players, /api/transfer-groups)
  seed.ts          - Seed data (runs on startup if DB empty)
  index.ts         - Express server entry
```

## Key Features

- Browse states, alliances, and players with filtering/search
- Player stat cards with furnace level, power, kill stats
- `statsStatus` field: animated "UPDATE REQUIRED" red badge on outdated players
- Transfer tracker showing player movements between alliances
- Premium pricing page ($2/$5/$10 tiers) - UI mockup only, no Stripe integration
- Premium player blue-glow styling + PREMIUM sash
- Discord contact blurred with PRO REQUIRED paywall
- Sponsored alliance gold badge
- Application form for joining alliances

## Database

PostgreSQL with Drizzle ORM. Schema in `shared/schema.ts`. Tables: states, alliances, players, transferGroups.

Run `npm run db:push` to sync schema. Seed data auto-runs on startup if tables are empty.

## Custom Domain

Target: frostlink.cc (configure after deploying via Replit Deployments settings)
