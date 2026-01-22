import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function ButtonClient() {
  return (
    <>
      <div className="md:block lg:flex  gap-4">
        <Button variant={"default"}>
          <Link href={"https://hostelskit.com"}>About</Link>
        </Button>
        <Button variant={"secondary"}>
          <Link href={"https://hostelskit.com"}>Contacts</Link>
        </Button>
      </div>
    </>
  );
}

export default ButtonClient;
