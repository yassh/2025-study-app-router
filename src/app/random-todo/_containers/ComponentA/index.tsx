import { getRandomTodo } from "../../_resources/todos";
import { ComponentAPresentation } from "./presentational";

export async function ComponentA() {
  const todo = await getRandomTodo();
  return <ComponentAPresentation todo={todo} />;
}
