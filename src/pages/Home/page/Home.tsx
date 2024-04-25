import { HomeComponent } from "../components/HomeComponent";
import CertificateComponent from "../components/CertificateComponent";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <HomeComponent />
      <CertificateComponent />
    </>
  );
}
