import { HomeComponent } from "../components/HomeComponent";
import CertificateComponent from "../components/CertificateComponent";
import CertificatePreview from "../components/certificatePreview/certificatePreview";
import { useEffect } from "react";
import { usePreviewCertificate } from "../utils/zustand";
export default function Home() {
  const previewCertificate = usePreviewCertificate(
    (state: any) => state.previewCertificate
  );
  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);
  useEffect(() => {
    document.body.style.overflow = previewCertificate ? "hidden" : "auto";
  }, [previewCertificate]);
  return (
    <>
      {previewCertificate == true && <CertificatePreview />}
      <HomeComponent />
      <CertificateComponent />
    </>
  );
}
