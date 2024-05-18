import { PrismaClient } from '@prisma/client';

declare global {
    namespace NodeJS {
        interface Global {
            prisma: PrismaClient;
        }
    }
}

let prisma: PrismaClient;

if (typeof window === 'undefined') {

    if (!global.prisma) {
        global.prisma = new PrismaClient({
            errorFormat: 'pretty',
            // log: ['query', 'info'],
        });
    }

    prisma = global.prisma;
}

export { prisma };
