import Link from "next/link";

export default function Page() {
  return (
    <main style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "32px" }}>CPRG 306: Web Development - Assignments</h1>
      <ul>
        <li style={{ fontSize: "26px" }}><Link href="week-2">week 2</Link></li>
        <li style={{ fontSize: "26px" }}><Link href="week-3">week 3</Link></li>
        <li style={{ fontSize: "26px" }}><Link href="week-4">week 4</Link></li>
        <li style={{ fontSize: "26px" }}><Link href="week-5">week 5</Link></li>
        <li style={{ fontSize: "26px" }}><Link href="week-6">week 6</Link></li>
        <li style={{ fontSize: "26px" }}><Link href="week-7">week 7</Link></li>
        <li style={{ fontSize: "26px" }}><Link href="week-8">week 8</Link></li>
        <li style={{ fontSize: "26px" }}><Link href="week-9">week 9</Link></li>
      </ul>
    </main>
  );
}