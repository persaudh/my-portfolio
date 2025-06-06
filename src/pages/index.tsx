import Layout from '@/components/Layout';
export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-700 mb-8">
          Hi, I'm Hemraj Persaud, a full-stack developer with a passion for building web applications.
        </p>
      </div>
      </Layout>
  );
}

