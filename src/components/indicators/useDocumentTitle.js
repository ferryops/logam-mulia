import { useEffect } from "react";

// create useDocumentTitle hook
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `API Public - ${title} `;
  }, [title]);
}
