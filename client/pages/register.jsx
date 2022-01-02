import Link from 'next/link';
import styles from '../styles/css/SignUp.module.css';
import { useState } from "react";

const Register = () => {
 
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cPassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cPassword } = user;

    async function dummyFunc() {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          work,
          password,
          cPassword,
        }),
      });

      const data = await res.json();
      if (data.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Registration Success");
        console.log("Registration Success");
        // history.push("/signin");
      }
    }
    dummyFunc();
  };

  return (
    <>

      <div className={styles.signup}>
        <div className={styles.container,"m-5"}>
          <div className={styles.signup__content }>
            <div className={styles.signup__form }>
              <h2 className={styles.form__title}>Sign Up</h2>
              <form method="POST" >

                <div >
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account"></i>
                  </label>
                  <input
                      className={styles.form_group}
                  
                    type="text"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Your Name"
                  />
                </div>
                <div >
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                  className={styles.form_group}
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Your Email"
                  />
                </div>
                <div >
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone"></i>
                  </label>
                  <input
                  className={styles.form_group}
                    type="text"
                    name="phone"
                    id="phone"
                    value={user.phone}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Your Phone"
                  />
                </div>
                <div  >
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow"></i>
                  </label>
                  <input
                  className={styles.form_group}
                    type="text"
                    name="work"
                    id="work"
                    value={user.work}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Your Profession"
                  />
                </div>
                <div  >
                  <label htmlFor="password">
                    <i className="zmdi zmdi-key"></i>
                  </label>
                  <input
                  className={styles.form_group}
                    type="password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Your Password"
                  />
                </div>
                <div  >
                  <label htmlFor="cPassword">
                    <i className="zmdi zmdi-key"></i>
                  </label>
                  <input
                  className={styles.form_group}
                    type="password"
                    name="cPassword"
                    id="cPassword"
                    value={user.cPassword}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className={styles.form_group ,styles.form__button}>
                  <input

                    type="submit"
                    name="signup"
                    id="signup"
                    className="form__submit"
                    value="Register"
                    onClick={postData}
                  />
                </div>
              </form>
            </div>
            <div className=" mt-3">
              <figure >
                <img src="/login.jpg" alt="Sign Up" />
              </figure>
              <div className={styles.link}>
                <Link href="/register" >
                  <a className="imageLink">I am already Register</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Register;
