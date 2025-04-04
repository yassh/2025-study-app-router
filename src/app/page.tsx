import Link from "next/link";

const pages = [
  {
    href: "/random-todo",
    name: "/random-todo",
  },
  {
    href: "/random-todo/revalidate",
    name: "/random-todo/revalidate",
  },
  {
    href: "/random-todo/force-dynamic",
    name: "/random-todo/force-dynamic",
  },
];

export default function Home() {
  return (
    <div>
      <h1>ページ一覧</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.href}>
            <Link href={page.href}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
