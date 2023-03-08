import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const teamRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.team.findMany({
      where: {
        businessId: ctx.session.user.businessId,
      },
    });
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        coach: z.string(),
        manager: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.team.create({
        data: {
          name: input.name,
          coach: input.coach,
          manager: input.manager,
          businessId: ctx.session.user.businessId,
        },
      });
    }),

  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      const { id } = input;
      return ctx.prisma.team.findUnique({
        where: { id },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.team.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
