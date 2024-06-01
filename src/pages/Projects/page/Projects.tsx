import ProjectComponent from "../components/ProjectComponent";
import { useEffect } from "react";
export default function Projects() {
  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);
  return (
    <>
      <ProjectComponent />
    </>
  );
}
