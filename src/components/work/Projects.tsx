import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import { projectData } from "@/resources";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => {
        const projectInfo = projectData[post.slug];

        return (
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`work/${post.slug}`}
            images={projectInfo?.images || []}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={
              projectInfo?.team?.map((member) => ({
                src: member.avatar,
              })) || []
            }
            link={post.metadata.link || ""}
          />
        );
      })}
    </Column>
  );
}
