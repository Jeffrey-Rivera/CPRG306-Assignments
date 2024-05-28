import Link from 'next/link';

export default function StudentInfo() {

  const linkStyles = "hover:underline"

  return (
    <div>
      <p>Jeffrey Rivera</p>
      <Link className={linkStyles} href="https://github.com/Jeffrey-Rivera/cprg306-assignments">https://github.com</Link>
    </div>
  );
}