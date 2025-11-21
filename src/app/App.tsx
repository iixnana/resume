import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { PageLayout } from "./layout/PageLayout";
import { ErrorBoundary } from "react-error-boundary";

export default function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense>
        <PageLayout>
          <Outlet />
        </PageLayout>
      </Suspense>
    </ErrorBoundary>
  );
}
