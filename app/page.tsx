import { getCurrentUser } from "@/lib/session";
import Logout from "@/components/ui/logout";
export default async function Home() {
  const user = await getCurrentUser();
 console.log("===>",user)
  return (
    <div>{user && <Logout />}
      {user?.name}
    </div>
  );
}
