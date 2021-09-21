import DashboardLayout from "./../../Component/Admin/Dashboard Layout/DashboardLayout";
import { useSession, getSession } from "next-auth/client";
import { useState, useEffect } from "react";

export default function DynamicHome() {
  const [session, loading] = useSession();
  const [Content, setContent] = useState();

  useEffect(() => {
    const PrivateRoute = async () => {
      const res = await fetch("/api/dashboard");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    PrivateRoute();
  }, [session]);

  // if (typeof window !== "undefined") return null;

  if (!session) {
    return <h2>You Are Not logged In User</h2>;
  }

    return <DashboardLayout />;
}

DynamicHome.getLayout = function PageLayout(page) {
  return { page };
};

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context)
    },
  }
}