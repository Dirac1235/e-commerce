import prisma from '../helpers/prisma-client';

export async function getWishlist(userId) {
  const wishlist = await prisma.wishlist.findMany({
    where: { userId },
    include: { product: true },
  });
  return wishlist;
}

export async function addToWishlist(userId, productId) {
  const wishlistItem = await prisma.wishlist.create({
    data: {
      userId,
      productId,
    },
    include: { 
        product: true
     },
  });
  return wishlistItem;
}

export async function removeFromWishlist(userId, productId) {
  const wishlistItem = await prisma.wishlist.deleteMany({
    where: { userId, productId },
  });
  return wishlistItem;
}
