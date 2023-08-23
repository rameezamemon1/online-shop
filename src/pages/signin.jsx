import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

function IndexPage() {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div>
      <button onClick={() => signIn("google")}>sign in with gooogle</button>
    </div>
  );
}
export default IndexPage;
