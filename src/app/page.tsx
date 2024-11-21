import { redirect } from "next/navigation";

export default function Home() {
  redirect("/characters-server");
  return <div className="h-screen"> page</div>;
}
