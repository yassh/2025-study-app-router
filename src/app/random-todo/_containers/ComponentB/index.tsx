import { getRandomTodo } from "../../_resources/todos";
import { ComponentBPresentation } from "./presentational";

export async function ComponentB() {
  const todo = await getRandomTodo();
  return <ComponentBPresentation todo={todo} />;
}
