import DesktopImage from "../assets/images/desktop-login.png";
import logo from "../assets/images/logo.png";
import { Card } from "../components/ui/card";

import { supabase } from "../supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const customStyles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
  },
  button: {
    background: "black",
    color: "white",
    width: "100%",
  },
  anchor: { color: "#696868" },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  },
};

const Login = () => {
  return (
    <div className="lg:flex w-full min-h-screen">
      <div className="lg:w-2/5 hidden lg:block">
        <section className="bg-dark-grey rounded-xl h-full  flex flex-col">
          <img src={logo} alt="logo" className="w-fit pt-10 pl-10" />
          <img
            src={DesktopImage}
            alt="sideimage for login page"
            className="h-auto w-full object-cover"
          />
          <article className="py-10 px-10">
            <h2 className="font-bold text-4xl text-wrap pb-4">
              Keep track of your money and save for your future
            </h2>
            <p>
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </article>
        </section>
      </div>
      <div className="lg:w-3/5 w-full">
        <div className="flex items-center justify-center h-full w-full ">
          <Card className="flex flex-col items-start p-8 space-y-8 max-w-md w-full">
            <div className="w-full">
              <Auth
                supabaseClient={supabase}
                localization={{
                  variables: {
                    sign_in: {
                      email_label: "Email",
                      password_label: "password",
                      button_label: "Login",
                      link_text: "Already have an account? Login",
                    },
                    sign_up: {
                      email_label: "Email",
                      password_label: "Create password",
                      button_label: "Create Account",
                      link_text: "Need to create an account? Sign up",
                    },
                  },
                }}
                theme="default"
                providers={[]}
                appearance={{ theme: ThemeSupa, style: customStyles }}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
