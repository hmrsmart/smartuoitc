import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/react';

// layout for page

import Auth from "layouts/Auth.js";

export default function Login() {
  const { data: session, status } = useSession()
if (!session){
    return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    تسجيل الدخول بواسطة
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <a
                href={`/api/auth/signin`}
                className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" 
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                    <img alt="..." className="w-5 mr-1" src="/img/google.svg" />
                    Google
                  </a>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </>
  );  
}else{
    return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <a
                href={`/api/auth/signout`}
                className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" 
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >      
                  <h1 className="text-blueGray-500 text-sm font-bold">      
                    تسجيل الخروج
                  </h1>
</a>                  
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </>
  ); 
}
}

Login.layout = Auth;
