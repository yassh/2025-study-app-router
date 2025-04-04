import { Todo } from "../../_resources/todos/types/Todo";

type Props = {
  todo: Todo;
};

export function ComponentAPresentation(props: Props) {
  const { todo } = props;
  return <div>{JSON.stringify(todo)}</div>;
}
