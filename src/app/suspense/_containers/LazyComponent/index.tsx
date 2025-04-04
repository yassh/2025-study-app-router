import { setTimeout } from "node:timers/promises";
import { LazyComponentPresentation } from "./presentational";

export async function LazyComponent() {
  await setTimeout(3000);

  return <LazyComponentPresentation />;
}
