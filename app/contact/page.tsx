import ContactForm from "@/components/contact";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const contactPage = () => {
  return (
    <div className="space-y-3 p-4 max-w-6xl m-auto w-full">
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-medium">Get in touch</h2>
        <p className="font-light text-sm">
          For queries and assistance, our team will get back to you promptly.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-5">
        <div className="lg:order-2 lg:space-y-3">
          <div className="flex border-2 lg:h-[85%] border-neutralsLightGrey p-6 rounded-md items-center justify-center">
            <Image
              src={"/contact.svg"}
              alt="contact"
              width={300}
              height={300}
            />
          </div>
          <div className="hidden lg:border-neutralsLightGrey p-3 lg:border-2 lg:flex gap-2 rounded-md">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary200 text-primaryPrimary">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-primary800 font-medium text-sm">
                partnerships@offersgenie.net
              </span>
            </div>
          </div>
        </div>
        <ContactForm />
        <div className="lg:hidden border-neutralsLightGrey p-3 border-2 flex gap-2 rounded-md">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-primary200 text-primaryPrimary">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-primary800 font-medium text-sm">
              partnerships@offersgenie.net
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactPage;
