import React, { lazy, Suspense } from "react";
const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));

const App = () => (
    <div>
      <h1>Hello World</h1>
    </div>
)

export default App;
