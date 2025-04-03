import { getRandomTodo } from "../../_resources/todos";

export async function ComponentB() {
  const todo = await getRandomTodo();
  return <div>{JSON.stringify(todo)}</div>;
}
