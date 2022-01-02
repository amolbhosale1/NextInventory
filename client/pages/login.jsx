//import SignIn from "../img/login.jpg";
//import { NavLink, useHistory } from "react-router-dom";
import styles from '../styles/css/Login.module.css';
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

  
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),

    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Success");

    }
  };

  return (
    <>
      <Head>
        <title>Login</title> 
      </Head>
      <div className={styles.login}>
        <div className={`${styles.container}  m-5`}   >
          <div className={styles.login__content}>
            <div className={styles.login__form}>
              <h2 className={styles.form__title}>Sign In</h2>
              <form method="POST"  >
                <div >
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input
                    className={styles.form__group}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div >
                  <label htmlFor="password">
                    <i class="zmdi zmdi-key"></i>

                  </label>
                  <input
                    className={styles.form__group}
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={styles.form__button}>
                  <input
                    className={styles.form__group}
                    type="submit"
                    name="login"
                    id="login"
                    value="Login"
                    onClick={ loginUser}
                  />
                </div>
              </form>
            </div>
            <div className={styles.login__image}>
              <figure>
                <Image src="/login.jpg" width={600} height={600} />
              </figure>
              <Link href="" className={styles.imageLink}>
                <a>No Account? Create your account!</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
