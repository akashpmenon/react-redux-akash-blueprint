import { useState } from "react";
import { Form, Link } from "react-router-dom";
import MainNav from "./Components/MainNav";

const Error = () => {
  const [ isLogin, setIsLogin ] = useState(true);

  const getPageType = () => isLogin ? 'Login' : 'Signup';

  return (
    <>
      <Form>
        <p>
          {getPageType()}
        </p>
        <p>
          Username:
          <input type="text"/>
        </p>
        <p>
          Password:
          <input type="password"/>
        </p>
        <Link to={`?mode=${isLogin ? 'login' : 'signup'}`}>{getPageType()}</Link>
      </Form>
    </>
  )
};

export default Error;