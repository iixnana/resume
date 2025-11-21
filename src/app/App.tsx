import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { PageLayout } from "./layout/PageLayout";

export default function App() {
  return (
    <Suspense>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </Suspense>
  );
}
