import Link from "next/link";

export default function Home() {
  let linkStyles = "underline text-cyan-600 hover:text-cyan-300";
  return (
    <main>
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <Link href="./week-2/" className={linkStyles}>
            Week 2 Introduction to React
          </Link>
        </li>
        <li>
          <Link href="./week-3/" className={linkStyles}>
            Week 3 Objects
          </Link>
        </li>
      </ul>
    </main>
  );
}
