import Layout from "@/components/Layout";
import ProjectTile from "@/components/project-tile/project-tile.component";
export default function Projects() {

  const projects = [
    {
      title: "Movie Directory App",
      description:
        "A full-stack ASP.NET Core MVC app with SQL Server, allowing users to search and filter movies, view details, and manage their watchlist.",
      githubLink:
        "https://github.com/persaudh/DotNetWebApps/tree/master/MovieDirectoryDotNetCoreMVC"
    }
  ];

  return (
    <Layout>
      <ProjectTile projects={projects} title="Projects | Hemraj Persaud" />
    </Layout>
  );
}
