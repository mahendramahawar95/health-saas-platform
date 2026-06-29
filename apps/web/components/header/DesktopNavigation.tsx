import Link from "next/link";
import { navigation } from "./navigation";

export default function DesktopNavigation() {
  return (
    <ul className="m-0 hidden list-none items-center gap-8 p-0 xl:flex">
      {navigation.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="font-medium text-foreground no-underline transition-colors duration-300 hover:text-primary"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
