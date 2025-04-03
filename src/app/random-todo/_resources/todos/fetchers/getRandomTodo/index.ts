import "server-only";
import { Todo } from "../../types/Todo";

export async function getRandomTodo() {
  // リクエストごとにランダムなTodoを返すAPI
  const res = await fetch("https://dummyjson.com/todos/random");
  return (await res.json()) as Todo;
}
