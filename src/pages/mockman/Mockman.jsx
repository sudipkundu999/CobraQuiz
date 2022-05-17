import Mockman from "mockman-js";
import { useDocumentTitle } from "../../utils";
import "./mock.css";

export const Mock = () => {
  useDocumentTitle("Mockman");

  return (
    <main className="mock-main">
      <Mockman />;
    </main>
  );
};
