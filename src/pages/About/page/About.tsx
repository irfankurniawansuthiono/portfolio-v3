import { useEffect } from "react";
import { AboutComponent } from "../components/AboutComponent";
export default function About() {
  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);
  return (
    <>
      <AboutComponent />
    </>
  );
}
