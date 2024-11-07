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

        <li>
          <Link href="./week-4/" className={linkStyles}>
            Week 4 Functions-Counter
          </Link>
        </li>

        <li>
          <Link href="./week-5/" className={linkStyles}>
            Week 5 interactive forms
          </Link>
        </li>

        <li>
          <Link href="./week-6/" className={linkStyles}>
            Week 6 handling lists
          </Link>
        </li>

        <li>
          <Link href="./week-7/" className={linkStyles}>
            Week 7 Managing State
          </Link>
        </li>

        <li>
          <Link href="./week-8/" className={linkStyles}>
            Week 8 Fetching Data
          </Link>
        </li>
      </ul>
    </main>
  );
}
