import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { db } from "~/server/api/simple-connect";
import { ExampleUsers } from "~/lib/schema";

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    }),
    users: publicProcedure.query(async () => {
      const users = await db.select().from(ExampleUsers)

      return {
        users
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
