'use client'
import { useMutation, useQuery } from "convex/react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import { api } from "@workspace/backend/_generated/api";
import { Button } from '@workspace/ui/components/button';

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1 className="text-2xl font-bold mb-3">apps/web</h1>
      <UserButton />
      <OrganizationSwitcher hidePersonal={true} />

      <form onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get("name") as string;
        await addUser({ name });
      }}>
        <input type="text" className="border border-gray-300 rounded-md p-2" name="name" />
        <Button type="submit">Add User</Button>
      </form>



      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}
