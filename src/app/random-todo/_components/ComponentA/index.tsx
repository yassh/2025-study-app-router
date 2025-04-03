import { getRandomTodo } from "../../_resources/todos";

export async function ComponentA() {
  const todo = await getRandomTodo();
  return <div>{JSON.stringify(todo)}</div>;
}
