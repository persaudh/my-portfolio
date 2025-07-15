//*import dynamic from "next/dynamic";*/
import Layout from "@/components/Layout";
import Head from "next/head";
// Dynamically import ResumeViewer to avoid SSR issues with PDF rendering
/**const ResumeViewer = dynamic(
  () => import("@/components/resume-viewer/resume-viewer.components"),
  {
    ssr: false,
  }
);*/

const Resume = () => {
  return (
    <Layout>
      <Head>
        <title>Resume | Hemraj Persaud</title>
      </Head>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {
            <iframe
          src="/docs/HemrajPersaudDotNetDeveloper.pdf"
          className="w-full h-screen"
          title="Resume PDF"
        ></iframe> }
      </div>
      {/**<ResumeViewer pdfUrl="/docs/HemrajPersaudDotNetDeveloper.pdf" /> */}
    </Layout>
  );
};

export default Resume;
