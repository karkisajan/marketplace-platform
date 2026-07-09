import { PrismaClient } from "../generated/prisma/client";

// Prevent multiple PrismaClient instances in Next.js development
// due to hot module replacement creating new instances on every reload.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
    accelerateUrl: process.env.ACCELERATE_URL || "",
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
