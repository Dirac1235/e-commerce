import { HttpException } from '../constants/http-exception';
import prisma from '../helpers/prisma-client';

export async function getUsers() {
  const users = await prisma.user.findMany()
  return users
}

export async function getOneUser(id) {
  const user = await prisma.user.findFirst({ where: { id } });
  return user;
}

export async function updateUser(id, data) {
  const user = await prisma.user.findFirst({ where: { id } });

  if (!user) {
    throw new HttpException("User not found", 404);
  }

  if (data.email && data.email !== user.email) {
    const emailExist = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (emailExist) {
      throw new HttpException("Email already in use", 409);
    }
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data,
  });

  return updatedUser;
}

export async function deleteUser(id) {
  const user = await prisma.user.findFirst({ where: { id } });

  if (!user) {
    throw new HttpException("User not found", 404);
  }

  await prisma.user.delete({ where: { id } });

  return { message: 'User deleted successfully' };
}

export async function findUserByName(name) {
  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          firstName: {
            contains: name,
            mode: 'insensitive',
          },
        },
        {
          lastName: {
            contains: name,
            mode: 'insensitive',
          },
        },
      ],
    },
  });
  return users;
}
