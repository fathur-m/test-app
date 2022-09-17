import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

function ProtectRoutes({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/Login");
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
}

export default ProtectRoutes;
