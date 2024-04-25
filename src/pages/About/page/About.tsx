import { AboutComponent } from "../components/AboutComponent";
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <AboutComponent />
    </>
  );
}
