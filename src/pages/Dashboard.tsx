import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/login");
      } else {
        setUser(session.user);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Welcome, {user?.email}</h1>
        <button
          onClick={() => {
            supabase.auth.signOut();
            navigate("/login");
          }}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
