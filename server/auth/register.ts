"use server";
import prisma from "../../prisma/client";
enum responsenum {
  success,
  exist,
}
type data = {
  email: string;
  password: string;
  name: string;
};
export default async function register(data: data) {
  const response = {
    status: responsenum.exist,
    data: "",
  };
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (user == null) {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        passwordHash: data.password,
      },
    });
    response.status = responsenum.success;
    return response;
  }
  return response;
}
