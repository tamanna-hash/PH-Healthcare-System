
import Logo from "@/assets/svg/logo";
import { Button } from "@base-ui/react";
import Link from "next/dist/client/link";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <nav className="w-full h-10 border border-primary">
      <div className="flex items-center justify-between h-full px-4">
        <Logo/>
        <ul className="flex justify-center items-center h-full gap-2">
          {routes.map((route) => (
            <li key={route.name}>
              <a href={route.href}>{route.name}</a>
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/login">Login</Link>}
          nativeButton={false}
        ></Button>
      </div>
    </nav>
  );
}
