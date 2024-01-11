import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

function AuthGuard({ children }) {
  const router = useRouter();
  const [user, setUser] = useState();

  function signout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
        router.push("/landingPage");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  function logIn() {
    router.push("/login");
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (
        (!user &&
          (router.asPath == "/login" )) ||
        (user &&
          user.displayName == "civilian" &&
          (router.asPath == "/viewCriminal" /*||
            router.asPath == "/createMissingPersonReport"*/)) ||
        (user &&
          user.displayName == null &&
          router.asPath != "/viewCriminal" &&
          router.asPath != "/login"/* &&
          router.asPath != "/signUpCivilian"*/)
      ) {
      } else {
        router.push("/landingPage");
      }
    });
  }, []);

  return (
    <div>
      <nav class="bg-black !important border-gray-200 px-2 sm:px-4 py-2.5 rounded">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/landingPage" class="flex items-center">
      <img src="/blockchain-logo.png" class="h-12 mr-3" alt="" />
      <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
              TraceGuard
            </span>
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
  <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-purple-500 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              {!user ||
                (user.displayName == null && (
                  <li>
                    <button
                      onClick={() => router.push("/")}
                      class={
                        router.asPath == "/"
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                          : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                      }
                    >
                      Penjahat
                    </button>
                  </li>
                ))}
              {!user ||
                (user.displayName == null && (
                  <li class="border-r border-blue-200 pr-8">
                    <button
                      onClick={() => router.push("/analytics")}
                      class={
                        router.asPath == "/analytics"
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                          : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                      }
                    >
                      Analisis
                    </button>
                  </li>
                ))}
              {user?.displayName == "civilian" && (
                <li>
                  <button
                    onClick={() => router.push("/viewCriminal")}
                    class={
                      router.asPath == "/viewCriminal"
                        ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                        : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                    }
                  >
                    Lihat Pelaku Kriminal
                  </button>
                </li>
              )}
              {user && (
                <li>
                  <button
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 cursor-default md:p-0 "
                    aria-current="page"
                  >
                    {user.email}
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={user ? signout : logIn}
                  class={
                    router.asPath == "/login"
                      ? "block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                      : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  }
                >
                  {user ? "Log out" : "Log in"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <footer class="bg-black shadow md:flex md:items-center md:justify-between md:p-6 ">
        <span class="p-4 text-sm text-white sm:text-center dark:text-white m-auto">
          <p class="hover:underline">
            © 2024 Trace Guard™ All Rights Reserved
          </p>
        </span>
      </footer>
    </div>
  );
}

export default AuthGuard;
