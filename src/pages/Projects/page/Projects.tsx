import ProjectComponent from "../components/ProjectComponent";
import { useEffect } from "react";
export default function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <ProjectComponent />
    </>
  );
}
