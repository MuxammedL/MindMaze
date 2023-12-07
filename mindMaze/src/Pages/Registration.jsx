import { Link, useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";

const Registration = ({ joinGame }) => {
  const navigate = useNavigate();
  const [showForSignIn, setShowForSignIn] = useState(true);
  const [showForSignUp, setShowForSignUp] = useState(true);
  const [showEmailPopup, setshowEmailPopup] = useState(false);
  const handleClick = () => {
    navigate("/gamer-modes");
  };
  const handleShowClickEmailPopup = () => {
    setshowEmailPopup(true);
  };
  const handleBtnClickEmailPopup = () => {
    setshowEmailPopup(false);
  };
  const handleShowClickIn = () => {
    setShowForSignIn((prev) => !prev);
  };
  const handleShowClickUp = () => {
    setShowForSignUp((prev) => !prev);
  };
  useEffect(() => {
    const signIn = document.querySelector(".signIn");
    const signUp = document.querySelector(".signUp");
    const formForSignIn = document.querySelector(".formForSignIn form");
    const formForSignUp = document.querySelector(".formForSignUp form");
    const signInErr = document.querySelector(".signInErr");
    const signInEmail = document.querySelector(
      '.formForSignIn input[type="email"]'
    );
    const signInPassword = document.querySelector(
      '.formForSignIn input[type="password"]'
    );
    const signUpUsername = document.querySelector(
      '.formForSignUp input[type="text"]'
    );
    const signUpEmail = document.querySelector(
      '.formForSignUp input[type="email"]'
    );
    const signUpPassword = document.querySelector(
      '.formForSignUp input[type="password"]'
    );
    const okBtn = document.querySelector(".okBtn");
    let passed = false;

    okBtn.addEventListener("click", () => {
      signIn.click();
    });

    signUp.addEventListener("click", () => {
      document.querySelector(".signIn.left") &&
        document.querySelector(".signIn.left").classList.remove("left");
      signIn.classList.add("right");
      formForSignIn.parentElement.classList.remove("active");
      formForSignUp.parentElement.classList.add("active");
    });

    signIn.addEventListener("click", () => {
      document.querySelector(".signIn.right") &&
        document.querySelector(".signIn.right").classList.remove("right");
      signIn.classList.add("left");
      formForSignIn.parentElement.classList.add("active");
      formForSignUp.parentElement.classList.remove("active");
    });

    function error(input, message) {
      const p = input.nextElementSibling;
      p.innerText = message;
      p.classList.add("show");
      passed = false;
    }
    // function error(input, message) {
    //   const p = input.nextElementSibling.nextElementSibling;
    //   p.innerText = message;
    //   p.classList.add("show");
    //   passed = false;
    // }

    function succes(input) {
      const p = input.nextElementSibling;
      p.innerText = "";
      p.classList.remove("show");
      passed = true;
    }

    function checkRequired(inputs) {
      inputs.forEach(function (input) {
        if (input.value == "") {
          error(input, `Daxil ${input.id} et`);
        } else {
          succes(input);
        }
      });
    }

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    function checkLength(input, min, max) {
      if (input.value.length < min) {
        error(input, `${input.id} ən azı ${min} simvol ola bilər.`);
      } else if (input.value.length > max) {
        error(input, `${input.id} ${max} simvola qədər ola bilər`);
      } else {
        succes(input);
      }
    }

    let strength = 0;
    function checkPasswordStrength(password) {
      // Initialize variables
      var tips = "";

      // Check password length
      if (password.length < 8) {
        tips += "Ən azı 8 simvol, ";
      } else {
        strength += 1;
      }

      // Check for mixed case
      if (password.match(/[A-Z]/)) {
        strength += 1;
      } else {
        tips += "ən azı 1 böyük hərf, ";
      }

      // Check for special and numbers characters
      if (password.match(/[^a-zA-Z\d]/) || password.match(/\d/)) {
        strength += 1;
      } else {
        tips += "rəqəm və ya simvol";
      }
      function formatSentence(sentence) {
        // Remove extra commas
        const sentenceWithoutExtraCommas = sentence.replace(/,{2,}/g, ",");

        // Capitalize the first letter of the sentence
        const formattedSentence =
          sentenceWithoutExtraCommas.charAt(0).toUpperCase() +
          sentenceWithoutExtraCommas.slice(1);

        return formattedSentence;
      }
      return formatSentence(tips);
    }

    formForSignIn.addEventListener("submit", function (e) {
      e.preventDefault();
      let isNotNull = true;
      const formData = {};
      for (const input of formForSignIn.elements) {
        if (input.tagName === "INPUT") {
          formData[input.name] = input.value;
          if (input.value == "") {
            isNotNull = false;
          }
        }
      }
      if (isNotNull) {
        fetch(
          "https://mindmazeprojectwebapi-6nortrmkbq-ey.a.run.app/User/Login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formData),
          }
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Failed to login user");
            }
          })
          .then((data) => {
            if (data.isSuccess) {
              handleClick();
              const { point, token_ID, username } = data.response;
              const info = { point, token_ID, username };
              localStorage.setItem("response", JSON.stringify(info));
              joinGame(token_ID, username, point);
            } else {
              signInErr.classList.add("show");
              console.error("Failed to login:", data.errors.message);
            }
          })
          .catch((error) => {
            console.error("Error:", error.message);
          });
      } else {
        signInErr.classList.add("show");
      }
    });

    signUpPassword.addEventListener("input", () => {
      error(signUpPassword, checkPasswordStrength(signUpPassword.value));
    });
    signUpPassword.addEventListener("focus", () => {
      error(signUpPassword, checkPasswordStrength(signUpPassword.value));
    });
    formForSignUp.addEventListener("submit", function (e) {
      e.preventDefault();
      checkRequired([signUpUsername, signUpEmail]);
      checkLength(signUpUsername, 5, 15);
      if (!validateEmail(signUpEmail.value)) {
        error(signUpEmail, `Emaili düzgün daxil edin.`);
      }
      if (passed && checkPasswordStrength(signUpPassword.value).length === 0) {
        const formData = {};
        for (const input of formForSignUp.elements) {
          if (input.tagName === "INPUT") {
            formData[input.name] = input.value;
          }
        }

        fetch(
          "https://mindmazeprojectwebapi-6nortrmkbq-ey.a.run.app/User/Create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formData),
          }
        )
          .then((res) => {
            if (res.ok) {
              handleShowClickEmailPopup();
              for (const input of formForSignUp.elements) {
                input.value = null;
              }
              succes(signUpUsername);
              succes(signUpEmail);
            } else {
              throw new Error("Failed to create user");
            }
          })
          .catch((error) => {
            console.error("Error:", error.message);
          });
      }
    });
  }, []);

  return (
    <>
      <m.main
        className="register"
        initial={{
          opacity: 0.5,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="maze-bg"
          style={{ backgroundImage: "url('./images/maze-bg.svg')" }}
        ></div>
        <div className={`emailPopup ${showEmailPopup ? "show" : ""}`}>
          <div className="inner">
            <p>Təsdiq üçün e-mailinizə mesaj göndərildi</p>
            <button onClick={handleBtnClickEmailPopup} className="okBtn">
              OK
            </button>
          </div>
        </div>
        <section>
          <div className="name">
            <h2>
              Mind<span>Maze</span>
            </h2>
          </div>
          <div className="sections">
            <div className="signIn left">
              <span>Daxil ol</span>
            </div>
            <div className="signUp">
              <span>Hesab yarat</span>
            </div>
          </div>
          <div className="formForSignIn active">
            <form noValidate>
              <div className="inputs">
                <input
                  type="email"
                  placeholder="nümunə@gmail.com"
                  name="email"
                  style={{ backgroundImage: "url('./images/email.svg')" }}
                />
                <div className="group">
                  <input
                    type={`${showForSignIn ? "password" : "text"}`}
                    name="password"
                    style={{ backgroundImage: "url('./images/lock.svg')" }}
                    placeholder="********"
                  />
                  <div
                    onClick={handleShowClickIn}
                    className="eye"
                    style={{
                      backgroundImage: `${
                        showForSignIn
                          ? "url('./images/closedEye.svg')"
                          : "url('./images/showEye.svg')"
                      }`,
                    }}
                  ></div>
                </div>
                <p className="signInErr">Email vəya parol səhvdir !</p>
              </div>
              <button>Daxil ol</button>
            </form>
          </div>
          <div className="formForSignUp">
            <form noValidate>
              <div className="group">
                <input
                  type="text"
                  name="username"
                  placeholder="İstifadəçi adı"
                  style={{ backgroundImage: "url('./images/user.svg')" }}
                  id="İstifadəçi adı"
                />
                <p></p>
              </div>
              <div className="group">
                <input
                  type="email"
                  name="email"
                  placeholder="nümunə@gmail.com"
                  style={{ backgroundImage: "url('./images/email.svg')" }}
                  id="Email"
                />
                <p></p>
              </div>
              <div className="group">
                <input
                  type={`${showForSignUp ? "password" : "text"}`}
                  name="password"
                  style={{ backgroundImage: "url('./images/lock.svg')" }}
                  placeholder="********"
                  id="Şifrə"
                />
                <p className="forPassword"></p>
                <div
                  onClick={handleShowClickUp}
                  className="eye"
                  style={{
                    backgroundImage: `${
                      showForSignUp
                        ? "url('./images/closedEye.svg')"
                        : "url('./images/showEye.svg')"
                    }`,
                  }}
                ></div>
              </div>
              <button type="submit">Qeydiyyatdan keç</button>
            </form>
          </div>
        </section>
      </m.main>
    </>
  );
};

export default Registration;
