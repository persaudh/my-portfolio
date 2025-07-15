import Head from "next/head";
import {ProjectsTileProps} from "./project-tiles.types";


const ProjectTile: React.FC<ProjectsTileProps> = ({ projects, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="min-h-screen px-4 py-12 bg-white">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          My Projects
        </h1>
        {projects.map((project, index) => (
          <div key={index} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Example project cards */}
            <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
              <h2 className="text-xl font-semibold text-blue-600">
                {project.title}
              </h2>
              <p className="text-sm text-gray-700 mt-2">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default ProjectTile;
