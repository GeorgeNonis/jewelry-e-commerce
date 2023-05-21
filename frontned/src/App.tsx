import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as Comp from "./components";

const RootLayout = lazy(() => import("./pages/rootLayout/rootLayout"));
const Error = lazy(() => import("./components/errors/errorReacRouter"));
const Home = lazy(() => import("./components/home/home"));
const CategoriesPage = lazy(
  () => import("./pages/categoriesPage/categoriesPage")
);
const CategoryPage = lazy(() => import("./pages/categoryPage/categoryPage"));
const NoPageFound = lazy(() => import("./pages/noPageFound/noPageFound"));
const ProductPage = lazy(() => import("./pages/productPage"));
const AboutUs = lazy(() => import("./pages/aboutUsPage"));
const FAQ = lazy(() => import("./pages/faq"));
const News = lazy(() => import("./pages/news"));
const StoreLocation = lazy(() => import("./pages/storeLocationPage"));
const Contact = lazy(() => import("./pages/contactUsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Comp.LoadingSpinner />}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Comp.LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Comp.LoadingSpinner />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "faqs",
        element: (
          <Suspense fallback={<Comp.LoadingSpinner />}>
            <FAQ />
          </Suspense>
        ),
      },
      {
        path: "news",
        element: (
          <Suspense fallback={<Comp.LoadingSpinner />}>
            <News />
          </Suspense>
        ),
      },
      {
        path: "location",
        element: (
          <Suspense fallback={<Comp.LoadingSpinner />}>
            <StoreLocation />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Comp.LoadingSpinner />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense fallback={<Comp.LoadingSpinner />}>
            <CategoriesPage />
          </Suspense>
        ),
        children: [
          {
            path: ":category",
            element: (
              <Suspense fallback={<Comp.LoadingSpinner />}>
                <CategoryPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "categories/product/:id",
        element: (
          <Suspense fallback={<Comp.LoadingSpinner />}>
            <ProductPage />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "*",
    element: (
      <Suspense fallback={<Comp.LoadingSpinner />}>
        <NoPageFound />
      </Suspense>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
