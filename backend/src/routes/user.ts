import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signinInput, signupInput } from '@shourya_042/common-app'

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
}>()

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const validatedBody = signupInput.safeParse(body);
    if (!validatedBody.success) {
        c.status(400);
        return c.json({ error: "invalid input" })
    }
    try {
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password
            }
        });
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({ jwt })
    } catch (e) {
        c.status(403);
        return c.json({ error: "error while signing up" })

    }
})

userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const validatedBody = signinInput.safeParse(body);
    if (!validatedBody.success) {
        c.status(400);
        return c.json({ error: "invalid input" })
    }
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        });
        if (user) {
            const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
            return c.json({ jwt })
        } else {
            c.status(403);
            return c.json({ error: "invalid credentials" })
        }
    } catch (e) {
        c.status(403);
        return c.json({ error: "error while signing in" })
    }
})