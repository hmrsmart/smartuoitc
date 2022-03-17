/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Login from "components/login";
import { useSession } from 'next-auth/react';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  const { data: session } = useSession()
   
 if (!session) 
 {
  return (
    <Login />
   )
 }
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                نظام جامعة تكنولوجيا المعلومات والاتصالات الذكي.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                هو نظام ذكي لادارة الجامعة ومواردها باستخدام احدث التقنيات في مجال الانظمة الالكترونية.
                 يمتاز هذا النظام بالعمل بتقنية الزمن الحقيقي بالاضافة الى الاشعارات المباشرة. يوظف هذا النظام تقنية (Machine learning) لزيادة الكفاءة في العمل.
              </p>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />
      </section>

      <Footer />
    </>
  );
}
