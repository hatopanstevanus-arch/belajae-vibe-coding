import { Elysia } from 'elysia';
import { db } from './db';

const app = new Elysia()
  .get('/', () => '👋 Hello world')
  .get('/health', () => ({ status: 'ok' }))
  .get('/users', async () => {
    // Example read using Drizzle
    const users = await db.select().from(db.tables.users);
    return users;
  })
  .listen(Number(process.env.PORT) || 3000);

console.log(`🚀 Server listening on http://localhost:${app.server?.port}`);
