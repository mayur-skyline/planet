import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Planet = lazy(() => import("./components/planets"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Planet />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
