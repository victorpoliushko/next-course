import React from "react";
import Router from "next/router";

export default function About() {
  const linkClickHandler = () => {
    Router.push("/");
  };

  return (
    <React.Fragment>
      <h1>About page</h1>
      <button onClick={linkClickHandler}>Go back home</button>
      <button onClick={() => Router.push('/posts')}>Go to posts</button>
    </React.Fragment>
  );
}
