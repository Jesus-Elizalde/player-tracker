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
});
