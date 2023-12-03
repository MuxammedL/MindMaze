import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
const Registration = () => {
  useEffect(() => {
    const signIn = document.querySelector(".signIn");
    const signUp = document.querySelector(".signUp");
    const formForSignIn = document.querySelector(".formForSignIn");
    const formForSignUp = document.querySelector(".formForSignUp");
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
    let passed = false;
    signUp.addEventListener("click", () => {
      document.querySelector(".signIn.left") &&
        document.querySelector(".signIn.left").classList.remove("left");
      signIn.classList.add("right");
      formForSignIn.classList.remove("active");
      formForSignUp.classList.add("active");
    });
    signIn.addEventListener("click", () => {
      document.querySelector(".signIn.right") &&
        document.querySelector(".signIn.right").classList.remove("right");
      signIn.classList.add("left");
      formForSignIn.classList.add("active");
      formForSignUp.classList.remove("active");
    });

    function error(input, message) {
      const p = input.nextElementSibling;
      p.innerText = message;
      p.classList.add("show");
      passed=false;
    }
    function succes(input) {
      const p = input.nextElementSibling;
      p.innerText = "";
      p.classList.remove("show");
      passed=true;
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
      if (!validateEmail(signInEmail.value)) {
        signInErr.classList.add("show");
      } else {
        signInErr.classList.remove("show");
        // Requset atilacaq
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
      if (!validateEmail(signUpEmail.value)) {
        error(signUpEmail, `Emaili düzgün daxil edin.`);
      }
      checkLength(signUpUsername, 5, 15);
      if(passed&&checkPasswordStrength(signUpPassword.value).length === 0){
        console.log('gonderildi')
      }else{
        console.log('gonderilmedi')
      }
      
    });
  }, []);
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
            <div className="signIn left">
              <span>Daxil ol</span>
            </div>
            <div className="signUp">
              <span>Hesab yarat</span>
            </div>
          </div>
          <div className="formForSignIn active">
            <form>
              <div className="inputs">
                <input
                  type="email"
                  placeholder="nümunə@gmail.com"
                  name="email"
                  style={{ backgroundImage: "url('./images/email.svg')" }}
                />
                <input
                  type="password"
                  name="password"
                  style={{ backgroundImage: "url('./images/lock.svg')" }}
                  placeholder="********"
                />
                <p className="signInErr">Email vəya parol səhvdir !</p>
              </div>
              <button type="submit">Daxil ol</button>
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
                  type="password"
                  name="password"
                  style={{ backgroundImage: "url('./images/lock.svg')" }}
                  placeholder="********"
                  id="Şifrə"
                />
                <p className="forPassword"></p>
              </div>
              <button type="submit">Qeydiyyatdan keç</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Registration;
