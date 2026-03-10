import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import HomeProjectLink from "./HomeProjectLink";

interface HomeProjectsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
}

export function HomeProjects({
  range,
  columns = "1",
}: HomeProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(
        range[0] - 1,
        range.length === 2 ? range[1] : sortedProjects.length
      )
    : sortedProjects;

  return (
    <>
      {displayedProjects.length > 0 && (
        <Grid
          columns={columns}
          mobileColumns="1"
          fillWidth
          marginBottom="40"
          gap="12"
        >
          {displayedProjects.map((post) => (
            <HomeProjectLink
              key={post.slug}
              post={post}
            />
          ))}
        </Grid>
      )}
    </>
  );
}
