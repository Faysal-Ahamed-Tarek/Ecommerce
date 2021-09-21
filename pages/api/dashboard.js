import { getSession } from "next-auth/client";

export default async (req, res) => {
  const session = await getSession({ req });
  if (session) {
    // Signed in
    res.send({
      content: "welcome to private route",
    });
  } else {
    // Not Signed in
    res.send({
      error: "you need to sign in",
    });
  }
};
