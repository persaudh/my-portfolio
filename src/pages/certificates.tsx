import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
const Certificate = () => {
  return (
    <Layout>
      <Head>
        <title>Certificates | Hemraj Persaud</title>
      </Head>
      <section className="max-w-wxl max-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Certificates
        </h1>

        <ul className="grid gap-6 md:grid-cols-2">
          <li className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Image
              src="/images/certificates/AWSCertifiedCloudPractitionerIcon.png"
              alt="AWS Certified Cloud Practitioner"
              width={200}
              height={100}
              className="object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              AWS Certified Cloud Practitioner
            </h2>
            <p className="text-gray-600 mb-4">
              Showcase foundational knowledge of AWS cloud services and cloud
              computing
            </p>
            <a
              href="https://www.credly.com/badges/1e4d4995-cd67-41e4-b303-7a5637dd669d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Certificate
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
};
export default Certificate;
