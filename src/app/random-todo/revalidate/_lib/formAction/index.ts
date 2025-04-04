"use server";

import { revalidatePath } from "next/cache";

export async function formAction() {
  revalidatePath("/random-todo/revalidate-path");
}
