"use client";
import React, { useState, useEffect, FormEvent } from "react";
import axios from "axios";
import Link from "next/link";
import { ToastOptions, toast } from "react-toastify";

export default function RegisterForm() {
  const toastOptions: ToastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error("Les mots de passes ne sont pas identiques.", toastOptions);
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Le nom d'utilisateur doit dépasser 3 lettres.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Mot de passe doit avoir 8 caractères mniimum.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email est requis.", toastOptions);
      return false;
    }

    return true;
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password } = values;
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 bg-[#131324]">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 bg-[#00000076] rounded-2xl p-12 w-full max-w-[calc(100vw-10rem)]"
      >
        <div className="flex items-center gap-4">
          <img src="doctordash.png" alt="logo" className="h-20" />
          <h1 className="text-white uppercase">PSP BI MSH</h1>
        </div>

        <input
          type="text"
          placeholder="Nom d'utilisateur"
          name="username"
          onChange={(e) => handleChange(e)}
          className="bg-transparent p-4 border border-[#4e0eff] rounded-md text-white w-full text-lg focus:border-[#997af0] focus:outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
          className="bg-transparent p-4 border border-[#4e0eff] rounded-md text-white w-full text-lg focus:border-[#997af0] focus:outline-none"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          onChange={(e) => handleChange(e)}
          className="bg-transparent p-4 border border-[#4e0eff] rounded-md text-white w-full text-lg focus:border-[#997af0] focus:outline-none"
        />

        <input
          type="password"
          placeholder="Confirmer mot de passe"
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
          className="bg-transparent p-4 border border-[#4e0eff] rounded-md text-white w-full text-lg focus:border-[#997af0] focus:outline-none"
        />

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
