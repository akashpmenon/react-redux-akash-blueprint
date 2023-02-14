import { Outlet, useNavigation } from "react-router-dom";
import MainNav from "../Components/MainNav";
import classes from './Root.module.css';
import Fetcher from "./Fetcher";

function Root() {
  const navigation = useNavigation();

  return (
    <>
      <MainNav />
      <Fetcher />
      <main className={classes.content}>
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}

export default Root;