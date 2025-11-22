import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { PageLayout } from "./layout/PageLayout";
import { ErrorBoundary } from "react-error-boundary";
import { ResumeProvider } from "../context/resume/ResumeContext.provider";
import { ThemeProvider } from "../context/theme/ThemeContext.provider";
import { Spinner } from "./components/Spinner/Spinner";

export default function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<Spinner />}>
        <ThemeProvider>
          <ResumeProvider>
            <PageLayout>
              <Outlet />
            </PageLayout>
          </ResumeProvider>
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  );
}
