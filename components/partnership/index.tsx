import React from "react";
import ParternshipHero from "./partnership-hero";
import PartnershipFaq from "./partnership-faq";
import VisiblePartners from "./visible-partners";

const Partnership = () => {
  return (
    <div className="space-y-8">
      <ParternshipHero />
      <PartnershipFaq />
      <VisiblePartners />
    </div>
  );
};

export default Partnership;
