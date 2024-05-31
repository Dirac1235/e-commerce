import * as argon2 from "argon2";
import { HttpException } from "../constants/http-exception";
import prisma from "../helpers/prisma-client";

export async function createUser(data) {
  const userExist = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (userExist) {
    throw new HttpException("User already exist with this Email", 409);
  }

  const hash = await argon2.hash(data.password);
  const user = await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: hash,
      phone: data.phone,
      address: data.address,
      role: data.role || "CUSTOMER",
    },
  });

  return user;
}

export async function loginUser(data) {
  const user = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new HttpException("User not found", 404);
  }

  const valid = await argon2.verify(user.password, data.password);
  // const valid = user.password == data.password ? true : false;

  if (!valid) {
    throw new HttpException("Invalid password", 401);
  }

  return user;
}

export async function findUserById(id) {
  const user = await prisma.user.findFirst({
    where: { id },
  });

  if (!user) {
    throw new HttpException("User not found", 404);
  }

  return user;
}
