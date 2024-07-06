import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/sections/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SEO & Web Sol",
  description: "This is Contact Page for website",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
