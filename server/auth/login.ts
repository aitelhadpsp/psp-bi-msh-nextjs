"use server";
import prisma from "../../prisma/client";
import Hash from "../utils/Hash";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import * as jose from 'jose';



export default async function login(username: string, password: string) {
  var user = await prisma.user.findFirst({
    where: {
      email: username,
    },
  });
  if (user == null) {
    return false;
  }


  const isAuth = Hash.verify(password, user.passwordHash);
  
  if (isAuth) {
    const expiresIn = new Date(new Date().setMonth(new Date().getMonth() + 1));
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET
    )
    const alg = 'HS256'


    const jwt = await new jose.SignJWT({

      "userId": user.id,
      "fullName": user.name,
      "role": user.role

    })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime(expiresIn)

      .sign(secret)

    console.log(jwt);

    cookies().set({
      name: "authToken",
      value: jwt,
      expires: expiresIn,
      httpOnly: true,
      secure: true,
    });
    redirect("/home");
  }
  return false;
}
