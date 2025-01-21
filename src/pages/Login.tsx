import React from "react";
import DesktopImage from "../assets/images/desktop-login.png";
import logo from "../assets/images/logo.png";
import { Card } from "../components/ui/card";

const Login = () => {
  return (
    <div className="flex  w-full min-h-screen">
      <div className="w-2/5">
        <section className=" bg-dark-grey rounded-xl h-full p-4 flex flex-col  ">
          <img src={logo} alt="logo" className="w-fit" />
          <img
            src={DesktopImage}
            alt="sideimage for login page"
            className="h-auto w-full object-cover"
          />
          <h2 className="font-bold text-4xl text-wrap pb-4">
            Keep track of your money and save for your future
          </h2>
          <p>
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </section>
      </div>
      <div className="bg-blue-300 w-3/5 ">
        <div className="flex items-center justify-center h-full">
          <Card className="flex flex-col items-center justify-center p-8 space-y-8 max-w-md  w-full">
            <h2 className="text-4xl font-bold text-center">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-2/5 p-2 my-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-2/5 p-2 my-2 rounded-md"
            />
            <button className="bg-blue-500 text-white p-2 rounded-md w-full">
              Login
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
