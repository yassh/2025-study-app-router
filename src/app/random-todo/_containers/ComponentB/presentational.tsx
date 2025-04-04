import { Todo } from "../../_resources/todos/types/Todo";

type Props = {
  todo: Todo;
};

export function ComponentBPresentation(props: Props) {
  const { todo } = props;
  return <div>{JSON.stringify(todo)}</div>;
}
