import React from "react";
import Card from "./Card";

export default function Result({ result }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {result.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
