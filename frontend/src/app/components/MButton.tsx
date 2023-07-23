import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export type MButtonType = {
  iconClass: string;
  route: string;
  name?: string;
};
export default function MButton({ iconClass, route, name }: MButtonType) {
  return (
    <Link href={route} className="">
      <div
        title={name}
        className="transition w-8 border-2 p-4 rounded-md shadow bg-white hover:bg-sky-200/[0.5] flex justify-center"
      >
        <i className={iconClass}></i>
      </div>
    </Link>
  );
}
