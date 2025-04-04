import { ComponentA } from "../_containers/ComponentA";
import { ComponentB } from "../_containers/ComponentB";
import { formAction } from "./_lib/formAction";

// > Server Componentsでは、Request Memoizationによって入力に対する出力を一定に保つことで、
// > データフェッチをサポートしながらもレンダリングの範囲ではコンポーネントの純粋性を保てるよう設計されています。
// ☞ https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_4_pure_server_components#%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%82%A7%E3%83%83%E3%83%81%E3%81%AE%E4%B8%80%E8%B2%AB%E6%80%A7

export default function Page() {
  // ランダムなTodoは1度だけ取得され、
  // 結果<ComponentA>と<ComponentB>は同じTodoを表示する
  return (
    <>
      <ComponentA />
      <ComponentB />
      <form action={formAction}>
        <button type="submit">revalidate</button>
      </form>
    </>
  );
}
