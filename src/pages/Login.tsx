import React from "react";
import DesktopImage from "../assets/images/desktop-login.png";
import logo from "../assets/images/logo.png";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Form } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

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
      <div className=" w-3/5 ">
        <div className="flex items-center justify-center h-full">
          <Card className="flex flex-col items-start p-8 space-y-8 max-w-md  w-full">
            <h2 className="text-4xl font-bold text-center">Login</h2>
            <Form>
              <div className="flex flex-col items-start w-full">
                <Label htmlFor="email" className="mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <Label htmlFor="password" className="mb-2">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
            </Form>

            <Button className="w-full">Login</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
