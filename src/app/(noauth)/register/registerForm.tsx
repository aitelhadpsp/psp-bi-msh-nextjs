"use client";
import React, { useState, useEffect, FormEvent } from "react";
import * as yup from "yup";
import Link from "next/link";
import { ToastOptions, toast } from "react-toastify";
import { useFormik } from "formik";
import register from "../../../../server/auth/register";
import { useRouter } from "next/navigation";
import { registerResponseEnum } from "../../../../server/auth/types";
const schema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'),null as never], 'Passwords must match')
    .required('Password confirmation is required'),
});



export default function RegisterForm() {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      const res = await register({
        email: values.email,
        name: values.name,
        password: values.password
      });
      if (res.status == registerResponseEnum.exist) toast.error("email deja utilisé ");
      else {
        router.push("/")
      }
    },
  });
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 bg-[#131324]">
      <form
        action=""
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center gap-8 bg-[#00000076] rounded-2xl p-12 w-full max-w-[calc(100vw-10rem)]"
      >
        <div className="flex items-center gap-4">
          <img src="doctordash.png" alt="logo" className="h-20" />
          <h1 className="text-white uppercase">PSP BI MSH</h1>
        </div>

        <input
          type="text"
          placeholder="Nom d'utilisateur"
          name="name"
          readOnly={formik.isSubmitting}
          onChange={formik.handleChange}
          className="bg-transparent p-4 border border-[#4e0eff] rounded-md text-white w-full text-lg focus:border-[#997af0] focus:outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          readOnly={formik.isSubmitting}
          onChange={formik.handleChange}
          className="bg-transparent p-4 border border-[#4e0eff] rounded-md text-white w-full text-lg focus:border-[#997af0] focus:outline-none"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          readOnly={formik.isSubmitting}
          onChange={formik.handleChange}
          className="bg-transparent p-4 border border-[#4e0eff] rounded-md text-white w-full text-lg focus:border-[#997af0] focus:outline-none"
        />

        <input
          type="password"
          placeholder="Confirmer mot de passe"
          name="confirmPassword"
          readOnly={formik.isSubmitting}
          onChange={formik.handleChange}
          className="bg-transparent p-4 border border-[#4e0eff] rounded-md text-white w-full text-lg focus:border-[#997af0] focus:outline-none"
        />
        <div className="text-white">
          <p>
          {formik.errors.confirmPassword
          }        </p>
        <p>
          {formik.errors.password
          }        </p>
       

        </div>
        <button
          type="submit"
          className="bg-[#4e0eff] text-white py-4 px-8 border-none font-bold cursor-pointer rounded-md text-lg uppercase"
        >
          S'inscrire
        </button>

        <span className="text-white uppercase">
          Vous avez déjà un compte ?{" "}
          <Link href="/" className="text-[#4e0eff] no-underline font-bold">
            Connectez vous !
          </Link>
        </span>
      </form>
    </div>
  );
}
