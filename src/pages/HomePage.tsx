import { useState } from "react";
import { Benefits } from "../components/Benefits";
import { ConditionerSelector } from "../components/ConditionerSelector";
import { Contacts } from "../components/Contacts";
import { DemoBanner } from "../components/DemoBanner";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { MobileContactBar } from "../components/MobileContactBar";
import { Portfolio } from "../components/Portfolio";
import { QuickServices } from "../components/QuickServices";
import { RequestModal } from "../components/RequestModal";
import { Reviews } from "../components/Reviews";
import { Services } from "../components/Services";
import { VisitCounter } from "../components/VisitCounter";
import { WorkSteps } from "../components/WorkSteps";
import { company } from "../config/company";
import { services } from "../config/services";

export function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [service, setService] = useState("Расчёт стоимости");

  const openRequest = (selected = "Расчёт стоимости") => {
    setService(selected);
    setModalOpen(true);
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    url: "https://GITHUB_USERNAME.github.io/pro-holod/",
    areaServed: company.city,
    ...(company.address ? { address: company.address } : {}),
    ...(company.phone ? { telephone: company.phone } : {}),
    ...(company.email ? { email: company.email } : {}),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Монтаж и обслуживание кондиционеров",
    provider: { "@type": "LocalBusiness", name: company.name },
    areaServed: company.city,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Услуги Про-Холод",
      itemListElement: services.map((item) => ({
        "@type": "Offer",
        name: item.title,
        description: item.description,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusiness, serviceSchema]) }} />
      <DemoBanner />
      <Header />
      <main>
        <Hero onRequest={openRequest} />
        <QuickServices onRequest={openRequest} />
        <Services onRequest={openRequest} />
        <ConditionerSelector />
        <Benefits />
        <WorkSteps />
        <Portfolio />
        <Reviews />
        <FAQ />
        <Contacts onRequest={openRequest} />
      </main>
      <Footer />
      <MobileContactBar onRequest={openRequest} />
      <VisitCounter />
      <RequestModal open={modalOpen} initialService={service} onClose={() => setModalOpen(false)} />
    </>
  );
}
