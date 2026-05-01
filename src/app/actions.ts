"use server";

import { projectSchema, type Project } from "@/lib/schemas";
import { supabase } from "@/lib/supabase";

type CreateProjectResult =
  | { success: true }
  | { success: false; error: string };

export async function createProjectAction(
  input: Project
): Promise<CreateProjectResult> {
  const parsed = projectSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Invalid project data.",
    };
  }

  const { error } = await supabase.from("projects").insert(parsed.data);

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  return { success: true };
}