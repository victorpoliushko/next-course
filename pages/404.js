import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import classes from "../styles/error.module.scss";

export default function ErrorPage() {
  return (
    <>
      <MainLayout>
      <h1 className={classes.error}>404</h1>
      <p>Click to <Link href={"/"}><a> go back</a></Link>home</p>
      </MainLayout>
    </>
  );
}
