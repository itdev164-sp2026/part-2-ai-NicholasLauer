import {
  Code2,
  Database,
  Figma,
  GitBranch,
  LayoutGrid,
  Server,
} from "lucide-react";

const skills = [
  {
    name: "TypeScript",
    description: "Build type-safe, maintainable full-stack apps.",
    icon: Code2,
  },
  {
    name: "Next.js",
    description: "Create modern App Router experiences with server components.",
    icon: LayoutGrid,
  },
  {
    name: "Tailwind CSS",
    description: "Design responsive interfaces with utility-first styling.",
    icon: Figma,
  },
  {
    name: "Node.js",
    description: "Develop backend logic and API integrations.",
    icon: Server,
  },
  {
    name: "Database Design",
    description: "Model, query, and organize data for real applications.",
    icon: Database,
  },
  {
    name: "Git & GitHub",
    description: "Collaborate confidently with branch-based workflows.",
    icon: GitBranch,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">
          Nicholas Lauer
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          I am a web development student remixing code with the things I love
          most: music, art, and the future of technology. Every project helps
          me build the skills to turn those passions into a career where
          creativity and innovation are part of my everyday work.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, description, icon: Icon }) => (
            <div
              key={name}
              className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <h3 className="font-semibold leading-none">{name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
