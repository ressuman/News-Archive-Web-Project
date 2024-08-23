"use client";

export default function CatchAllSegmentRouteError({ error }) {
  return (
    <div id="error">
      <h2>An error occurred</h2>
      <p>Invalid path.</p>
      <p>{error.message}</p>
    </div>
  );
}
