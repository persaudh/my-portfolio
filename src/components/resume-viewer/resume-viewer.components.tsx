import { useState, useEffect } from "react";

import type { DocumentProps, PageProps } from "react-pdf";

export default function ResumeViewer({ pdfUrl }: { pdfUrl: string }) {
  const [DocumentComp, setDocumentComp] =
    useState<React.ComponentType<DocumentProps> | null>(null);
  const [PageComp, setPageComp] =
    useState<React.ComponentType<PageProps> | null>(null);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    (async () => {
      const { pdfjs, Document, Page } = await import("react-pdf");
      pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

      setDocumentComp(() => Document);
      setPageComp(() => Page);
    })();
  }, []);

  if (!DocumentComp || !PageComp) {
    return <div>Loading PDF Viewer...</div>;
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <DocumentComp
        file={pdfUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        className="w-full h-screen"
      >
        {Array.from({ length: numPages }, (_, index) => (
          <PageComp
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            className="mb-4"
          />
        ))}
      </DocumentComp>
    </div>
  );
}
