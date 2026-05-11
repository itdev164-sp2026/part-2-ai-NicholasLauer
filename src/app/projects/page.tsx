import { unstable_noStore as noStore } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectStatus = "active" | "completed" | "archived";

type Project = {
  id: string;
  title: string;
  description: string | null;
  status: ProjectStatus;
};

const statusBadgeStyles: Record<ProjectStatus, string> = {
  active: "bg-emerald-500/12 text-emerald-700 ring-emerald-600/20 dark:text-emerald-300",
  completed: "bg-blue-500/12 text-blue-700 ring-blue-600/20 dark:text-blue-300",
  archived: "bg-slate-500/12 text-slate-700 ring-slate-600/20 dark:text-slate-300",
};

export default async function ProjectsPage() {
  noStore();
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: projects, error } = await supabase
    .from("projects")
    .select("id, title, description, status")
    .eq("user_id", user?.id ?? "")
    .order("title", { ascending: true });

  if (error) {
    return (
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-sm text-destructive">
          Could not load projects. Please check your Supabase connection and table permissions.
        </p>
      </section>
    );
  }

  const typedProjects = (projects ?? []) as Project[];

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="max-w-2xl text-muted-foreground">
            A live view of project records from Supabase.
          </p>
        </div>
        <Link href="/projects/new" className={buttonVariants()}>
          New Project
        </Link>
      </section>

      {typedProjects.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>No projects found</CardTitle>
            <CardDescription>
              Add records to the projects table in Supabase to see them here.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {typedProjects.map((project) => (
            <Card key={project.id} className="h-full justify-between">
              <CardHeader className="gap-2">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-base">{project.title}</CardTitle>
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium capitalize ring-1",
                      statusBadgeStyles[project.status]
                    )}
                  >
                    {project.status}
                  </span>
                </div>
                <CardDescription>
                  {project.description?.trim() || "No description provided."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Project ID: {project.id}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      )}
    </div>
  );
}
