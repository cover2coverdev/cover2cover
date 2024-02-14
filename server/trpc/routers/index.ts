import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { TRPCError } from "@trpc/server";
import { GoogleBookVolume } from "~/types/googlebooks";

export const appRouter = router({
  googlebooks: publicProcedure
    .input(
      z.object({
        q: z.string(),
        maxResults: z.number().min(1).max(40).optional(),
      })
    )
    .query(({ input }) => {
      const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
      const {GOOGLE_BOOKS_API_KEY} =  useRuntimeConfig()
      return $fetch<{ items: GoogleBookVolume[] }>(BASE_URL, { params: {...input, key: GOOGLE_BOOKS_API_KEY} }).catch((e) => {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch from googlebooks API.",
          cause: e,
        });
      });

    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
