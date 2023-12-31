"use client";
import React, { FormEvent, useState } from "react";
import { ToastOptions, toast } from "react-toastify";
import Link from "next/link";
import login from "../../../../server/auth/login";
import { useFormik } from "formik";
export default function LoginForm() {
  const toastOptions: ToastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async ({ password, username }) => {
      const res = await login(username, password);
      if (!res) toast.error("Email ou mot de passe incorrect !", toastOptions);
      else toast.success("Connexion réussie !", toastOptions);
    },
  });

  return (
    <div className="h-screen w-screen flex flex-col justify-center gap-4 items-center bg-[#131324]">
      <form
        className="flex flex-col gap-8 bg-[#00000076] rounded-2xl p-12 w-full max-w-[calc(100vw-10rem)]"
        onSubmit={formik.handleSubmit}
      >
        <div className="brand flex items-center gap-4 justify-center">
          <img className="h-20" src="doctordash.png" alt="Brand" />
          <h1 className="text-white uppercase">PSP BI MSH</h1>
        </div>
        <input
          className="bg-transparent p-4 border border-[#4e0eff] rounded-md text-white w-full text-lg focus:border-[#997af0] focus:outline-none"
          type="text"
          placeholder="Nom d'utilisateur"
          name="username"
          readOnly={formik.isSubmitting}
          onChange={formik.handleChange}
          min="3"
        />
        <input
          className="bg-transparent p-4 border border-[#4e0eff] rounded-md text-white w-full text-lg focus:border-[#997af0] focus:outline-none"
          type="password"
          readOnly={formik.isSubmitting}
          placeholder="Mot de passe"
          name="password"
          onChange={formik.handleChange}
        />
        <button
          type="button"
          onClick={(e) => formik.submitForm()}
          disabled={formik.isSubmitting}
          className="bg-[#4e0eff] text-white py-4 px-8 border-none font-bold cursor-pointer rounded-md text-lg uppercase hover:bg-[#4e0eff]"
        >
          {formik.isSubmitting ? "Connection..." : "Se connecter"}
        </button>
        <span className="text-white uppercase">
          Vous n'avez pas un compte ?
          <Link
            href="/register"
            className="text-[#4e0eff] no-underline font-bold"
          >
            Inscrivez vous !
          </Link>
        </span>
        <span className="text-white uppercase">
          mot de passe oublié ?{" "}
          <Link
            href="/forgot-password"
            className="text-[#4e0eff] no-underline font-bold"
          >
            Récupérer !
          </Link>
        </span>
      </form>
    </div>
  );
}
