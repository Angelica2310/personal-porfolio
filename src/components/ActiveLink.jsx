"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, children, variant }) {
  const pathName = usePathname();
  const isActive = pathName === href;

  const styles = {
    navBar: isActive
      ? "border-2 border-[--pink] cursor-pointer p-1 w-fit text-[--grey]"
      : "cursor-pointer p-1 w-fit",
  };

  return (
    <Link href={href} className={styles[variant] || ""}>
      {children}
    </Link>
  );
}
