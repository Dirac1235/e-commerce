import prisma from '../helpers/prisma-client';

export async function createProduct(data) {
  const { name, price, description, image, categoryId } = data;

  const product = await prisma.product.create({
    data: {
      name,
      price,
      description,
      image,
      category: categoryId ? { connect: { id: categoryId } } : undefined,
    },
    include: {
      category: true,
    },
  });

  return product;
}

export async function getManyProducts(category, search) {
  console.log({ category, search });

  const whereClause = {
    OR: [
      { name: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ],
  };

  if (category) {
    whereClause.category = {
        id: category
    };
  }

  const products = await prisma.product.findMany({
    where: whereClause,
    include: {
      category: true,
    },
  });
  return products;
}

export async function getOneProduct(id) {
  const product = await prisma.product.findFirst({
    where: { id },
    include: {
      category: true,
    },
  });
  return product;
}

export async function updateProduct(id, data) {
  const product = await prisma.product.update({
    where: { id },
    data: data,
    include: {
      category: true,
    },
  });
  return product;
}

export async function deleteProduct(id) {
  const product = await prisma.product.delete({
    where: { id },
    include: {
      category: true,
    },
  });
  return product;
}
