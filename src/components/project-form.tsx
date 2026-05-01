"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { createProjectAction } from "@/app/actions";
import { type Project, projectSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ProjectForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Project>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "active",
    },
  });

  const onSubmit = async (values: Project) => {
    const result = await createProjectAction(values);

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    toast.success("Project created successfully.");
    reset({
      title: "",
      description: "",
      status: "active",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Field data-invalid={Boolean(errors.title)}>
        <FieldLabel htmlFor="title">Title</FieldLabel>
        <Input
          id="title"
          placeholder="Website Redesign"
          aria-invalid={Boolean(errors.title)}
          {...register("title")}
        />
        <FieldError errors={[errors.title]} />
      </Field>

      <Field data-invalid={Boolean(errors.description)}>
        <FieldLabel htmlFor="description">Description</FieldLabel>
        <Textarea
          id="description"
          placeholder="Describe the project goals and deliverables..."
          aria-invalid={Boolean(errors.description)}
          rows={5}
          {...register("description")}
        />
        <FieldError errors={[errors.description]} />
      </Field>

      <Field data-invalid={Boolean(errors.status)}>
        <FieldLabel>Status</FieldLabel>
        <Controller
          control={control}
          name="status"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger
                className="w-full"
                aria-invalid={Boolean(errors.status)}
              >
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <FieldError errors={[errors.status]} />
      </Field>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : "Create Project"}
      </Button>
    </form>
  );
}