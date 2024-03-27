import Link from 'next/link';

export default function Head() {
  return (
    <header className="h-16">
      <nav className="h-full flex justify-end px-5">
        <ul className="text-center font-semibold flex justify-evenly items-center">
          <li className="w-16 mx-2 hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="w-16 mx-2 hover:underline">
            <Link href="/about">About</Link>
          </li>
          <li className="w-16 mx-2 hover:underline">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="w-16 mx-2 hover:underline">
            <Link href="/works">Works</Link>
          </li>
          <li className="w-16 mx-2 hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}