import React from "react";

async function showArticle({ params }) {
  const { title } = await params; // await the params Promise
  return (
    <>
      <h1>Article Number is: {title}</h1>
    </>
  );
}

export default showArticle;
