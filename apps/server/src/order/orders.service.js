import prisma from "../helpers/prisma-client";

export async function getAllOrders() {
  const orders = await prisma.order.findMany({
    include: {
      orderItems: true,
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
          address: true,
          role: true,
          image: true,
        },
      },
    },
  });
  return orders;
}
