import { Suspense } from "react";
import { LazyComponent } from "./_containers/LazyComponent";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div>
      <div>Suspense境界の外側</div>
      <Suspense fallback={<div>loading...</div>}>
        <div>Suspense境界の内側</div>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
