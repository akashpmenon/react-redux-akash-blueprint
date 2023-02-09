import { Outlet } from "react-router-dom";
import MainNav from "../Components/MainNav";
import classes from './Root.module.css';

function Root() {
  return (
    <>
      <main className={classes.content}>
        <MainNav />
      </main>
      <Outlet />
    </>
  );
}

export default Root;