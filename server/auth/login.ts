"use server";
import prisma from "../../prisma/client";
import Hash from "../utils/Hash";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export default async function login(username: string, password: string) {
  var user = await prisma.user.findUnique({
    where: {
      email: username,
    },
  });
  if (user == null) {
    return false;
  }
  const isAuth = Hash.verify(password, user.passwordHash);
  const expiresIn = new Date(new Date().setMonth(new Date().getMonth() + 1));
  if (isAuth) {
    const configs = new Map<string, any>();
    configs.set("userId", user.name);
    configs.set("role", user.role);

    cookies().set({
      name: "authToken",
      value: jwt.sign(
        Object.fromEntries(configs),
        process.env.JWT_SECRET as string,
        {
          expiresIn: expiresIn.getTime(),
          algorithm: "HS256",
        }
      ),
      expires: expiresIn,
      httpOnly: true,
      secure: true,
    });
    redirect("/home");
  }
  return false;
}
