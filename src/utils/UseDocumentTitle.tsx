import { useEffect } from "react";

/**
 * Sets the Document title as per the page name
 * @param {string} pageName Takes the page name
 */
export const useDocumentTitle = (pageName: string) => {
  useEffect(() => {
    document.title = `CobraQuiz | ${pageName}`;
  }, [pageName]);
};
