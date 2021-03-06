import "twin.macro";
import Link from "next/link";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" }
];

export default function Nav() {
  return (
    <nav>
      <ul tw="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a tw="text-blue-500 no-underline">Home</a>
          </Link>
        </li>
        <ul tw="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} tw="text-blue-500 no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
