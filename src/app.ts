import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

export const app = fastify()

const prisma = new PrismaClient()
prisma.user.create({
  data: {
    name: 'Rhalf Oliveira',
    email: 'rhalfsouza@hotmail.com',
  },
})
