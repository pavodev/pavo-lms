import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

/**
 * This initialization alone would be a problem in production because we have hot-reload and
 * every time we save a file a new instance of the client is created and that would
 * easily overflow the project and cause a crash. That's why we check the env variable and
 * use the globalThis as it's not affected by the hot-reload.
 */
// export const db = new PrismaClient();
