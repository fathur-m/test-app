import React from "react";
import Header from "../../components/Header";
import ProtectRoutes from "../../components/ProtectRoutes";
import { useAuth } from "../../hooks/useAuth";

function UserHome() {
  const { logout, user } = useAuth();

  return user ? (
    <ProtectRoutes>
      <Header />
      <div className="padtop mx-auto max-w-7xl px-4">
        <div className="mt-8">
          <h1 className="py-4 text-3xl">Welcome {user.name}</h1>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
        </div>
        <button
          className="my-4 rounded-lg bg-red-500 px-16 py-2"
          onClick={logout}
        >
          logout
        </button>
      </div>
    </ProtectRoutes>
  ) : null;
}

export default UserHome;
