import { ProjectForm } from "@/components/project-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">New Project</h1>
        <p className="max-w-2xl text-muted-foreground">
          Add a new project and save it to Supabase.
        </p>
      </section>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Create Project</CardTitle>
          <CardDescription>
            Provide a title, detailed description, and status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProjectForm />
        </CardContent>
      </Card>
    </div>
  );
}