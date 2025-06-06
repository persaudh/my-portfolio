import Head from 'next/head';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Hemraj Persaud</title>
      </Head>
      <main className="min-h-screen px-4 py-12 bg-white">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
         My Projects
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Example project cards */}
            <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
                <h2 className="text-xl font-semibold text-blue-600">Movie Directory App</h2>
                <p className="text-sm text-gray-700 mt-2">
                    A full-stack ASP.NET Core MVP app with SQL Server, allowing users to search and filter movies, view details, and manage their watchlist.
                </p>
                <a
                    href="https://github.com/persaudh/DotNetWebApps/tree/master/MovieDirectoryDotNetCoreMVC"
                    target="_blank"
                    className="inline-block mt-4 text-blue-500 hover:underline"
                    >
                    View on GitHub
                </a>
            </div>
        </div>
      </main>
    </>
  );
}