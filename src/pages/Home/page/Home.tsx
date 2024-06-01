import { HomeComponent } from "../components/HomeComponent";
import CertificateComponent from "../components/CertificateComponent";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);
  return (
    <>
      <HomeComponent />
      <CertificateComponent />
    </>
  );
}
