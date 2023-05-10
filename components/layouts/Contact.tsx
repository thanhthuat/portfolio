import MainLayout from "@components/hoc/main-layout";
import WebContact from "@components/web-contact/web-contact";
import React from "react";

const ContactPage = () => {
  return (
    <MainLayout className="nobg">
      <WebContact />
    </MainLayout>
  );
};

export default ContactPage;
