import { authUserSession } from "@/libs/auth-libs";
import { signIn } from "next-auth/react";
import Link from "next/link";

export const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between gap-2">
      {user ? (
        <Link href="/user/dashboard" className="py-1">
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        // onClick={() => signIn(actionURL)}
        className="bg-color-dark text-color-accent py-1 px-12"
      >
        {actionLabel}
      </Link>
    </div>
  )
};