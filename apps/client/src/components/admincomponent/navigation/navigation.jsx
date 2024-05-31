"use client";

import { deleteAuthentication } from "@app/client/data/auth/auth";
import { Button } from "../../ui/button";
import "./styles.css";
import Link from "next/link";
import useMutation from "@app/client/hooks/use-mutation";
export default function Navigation() {
  const { isMutating, startMutation } = useMutation();
  return (
    <div className="navigation">
      <div className="admin_top">
        <img className="admin_img" src="/admin_profile.png" alt="" />
        <div>
          <h4>Admin</h4>
          <p>Admin page</p>
        </div>
      </div>

      <nav>
        <Link href="/admin">Dashboard</Link>
        <Link href="/admin/products">Edit Products</Link>
        <Link href={"/admin/catagory"}>Edit Catagory</Link>
        <Link href="/admin/users">View Users</Link>
        <Link href="/admin/orders">View orders</Link>
      </nav>

      <Button
        onClick={() =>
          startMutation(async () => {
            await deleteAuthentication();
          })
        }
      >
        Logout
      </Button>
    </div>
  );
}
