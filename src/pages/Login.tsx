import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DesktopImage from "../assets/images/desktop-login.png";
import logo from "../assets/images/logo.png";
import { Card } from "../components/ui/card";

import { supabase } from "../supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { User } from "@supabase/supabase-js";

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
  // To do clean up and refactor
  // to do nagigate to dashboard after login
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);
  if (user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6">Welcome, {user.email}</h1>
          <button
            onClick={() => supabase.auth.signOut()}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-2/5">
        <section className="bg-dark-grey rounded-xl h-full p-4 flex flex-col">
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
      <div className="w-3/5">
        <div className="flex items-center justify-center h-full w-full">
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
                      password_label: "password",
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
