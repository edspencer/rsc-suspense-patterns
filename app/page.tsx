export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">React Server Components and Suspense</h1>
      <p>
        This demo app contains 5 simple pages that show how React and NextJS work with React Server Components and
        Suspense.
      </p>
      <p>
        The slow-loading pages have a simulated 3 second database call. Try the different versions to see how the UI
        feels when we implement <a href="/slow/suspense">page-level Suspense (via a loading.tsx file)</a>,
        <a href="/slow/component-suspense">component-level Suspense (via an explicit Suspense boundary)</a> or{" "}
        <a href="/slow/no-suspense">no Suspense at all.</a>
      </p>
      <ul>
        <li>
          <a href="/slow/no-suspense">Slow page with no Suspense</a>
        </li>
        <li>
          <a href="/slow/suspense">Slow page with Suspense (page-level)</a>
        </li>
        <li>
          <a href="/slow/component-suspense">Slow page with Suspense (component-level)</a>
        </li>
      </ul>

      <p>
        And here are a couple of fast-loading pages for good measure. When we know our RSC pages are very fast to
        render, we can get away with{" "}
        <a href="https://edspencer.net/2024/06/18/understanding-react-server-components-and-suspense">
          not thinking about async RSC behaviors or Suspense
        </a>
        .
      </p>
      <ul>
        <li>
          <a href="/fast/no-suspense">Fast page with no Suspense</a>
        </li>
        <li>
          <a href="/fast/suspense">Fast page with Suspense</a>
        </li>
      </ul>
    </div>
  );
}
