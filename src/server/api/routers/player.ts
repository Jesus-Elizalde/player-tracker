import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const playerRouter = createTRPCRouter({
  getPlayerByTeam: protectedProcedure
    .input(
      z.object({
        teamId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.player.findMany({
        where: {
          teamId: input.teamId,
        },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        teamId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.player.create({
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
          teamId: input.teamId,
        },
      });
    }),

  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      const { id } = input;
      return ctx.prisma.player.findUnique({
        where: { id },
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        playerId: z.string(),
        firstName: z.string(),
        lastName: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.player.update({
        where: { id: input.playerId },
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.player.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
