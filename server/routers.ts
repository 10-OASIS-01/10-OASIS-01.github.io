import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { storagePut } from "./storage";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // File upload router
  files: router({
    // Generate upload URL for client-side file upload
    getUploadUrl: protectedProcedure
      .input(z.object({
        fileName: z.string(),
        contentType: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        const userId = ctx.user.id;
        const timestamp = Date.now();
        const randomSuffix = Math.random().toString(36).substring(2, 8);
        const fileKey = `user-${userId}/uploads/${timestamp}-${randomSuffix}-${input.fileName}`;
        
        return {
          fileKey,
          uploadUrl: `/api/files/upload?key=${encodeURIComponent(fileKey)}&contentType=${encodeURIComponent(input.contentType)}`,
        };
      }),
    
    // Upload file data (called by client after getting upload URL)
    upload: protectedProcedure
      .input(z.object({
        fileKey: z.string(),
        fileData: z.string(), // base64 encoded file data
        contentType: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        // Decode base64 file data
        const buffer = Buffer.from(input.fileData, 'base64');
        
        // Upload to S3
        const result = await storagePut(input.fileKey, buffer, input.contentType);
        
        return {
          key: result.key,
          url: result.url,
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
