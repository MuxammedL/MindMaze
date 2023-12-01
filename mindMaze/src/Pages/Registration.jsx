import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
const Registration = () => {
  return (
    <>
      <main className="register">
        <div
          className="maze-bg"
          style={{ backgroundImage: "url('./images/maze-bg.svg')" }}
        ></div>
        <section>
          <div className="name">
            <h2>
              Mind<span>Maze</span>
            </h2>
          </div>
          <div className="sections">
            <div className="signIn active">
              <span>Daxil ol</span>
            </div>
            <div className="signUp">
              <span>Hesab yarat</span>
            </div>
          </div>
          <div className="formForSignIn">
            <form>
              <input
                type="text"
                placeholder="example@gmail.com"
                name="email"
                style={{ backgroundImage: "url('./images/email.svg')" }}
              />
              <input
                type="password"
                name="password"
                style={{ backgroundImage: "url('./images/lock.svg')" }}
              />
              <button type="submit">Daxil ol</button>
            </form>
          </div>
          <div className="formForSignUp">
            <form>
              <input
                type="text"
                name="username"
                placeholder="Username"
                style={{ backgroundImage: "url('./images/user.svg')" }}
              />
              <input
                type="text"
                name="email"
                placeholder="example@gmail.com"
                style={{ backgroundImage: "url('./images/email.svg')" }}
              />
              <input
                type="password"
                style={{ backgroundImage: "url('./images/lock.svg')" }}
              />
              <button type="submit">Qeydiyyatdan keç</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Registration;
