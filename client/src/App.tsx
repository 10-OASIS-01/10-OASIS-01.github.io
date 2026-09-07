import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
const Blog = lazy(() => import("./pages/Blog"));
const BlogPostPage = lazy(() => import("./pages/BlogPost"));

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"}>
        {(params) => <BlogPostPage slug={params.slug} />}
      </Route>
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Suspense
          fallback={
            <>
              <Navigation />
              <main
                id="main-content"
                className="site-shell route-loading"
                aria-busy="true"
              >
                <p role="status">Loading page…</p>
              </main>
            </>
          }
        >
          <Router />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
