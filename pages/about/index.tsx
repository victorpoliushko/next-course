import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";
import { MyAbout } from "../../interfaces/about";

interface AboutPageProps {
  title: MyAbout
}

export default function About({ title }: AboutPageProps) {
  const linkClickHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout title={'About Page'}>
      <h1>{title}</h1>
      <button onClick={linkClickHandler}>Go back home</button>
      <button onClick={() => Router.push('/posts')}>Go to posts</button>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/about");
  const data: MyAbout = await response.json();

  return {
    title: data.title
  }
}
