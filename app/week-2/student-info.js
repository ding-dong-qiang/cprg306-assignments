import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1>Student Information</h1>
      <p>My Name: Dong Chen</p>
      <Link
        className="underline text-cyan-600 hover:text-cyan-300"
        href="https://github.com/ding-dong-qiang?tab=repositories"
      >
        My GitHub Link
      </Link>
    </main>
  );
}
