export default function Head() {
  return (
    <header className="h-16">
      <nav className="h-full flex justify-end px-5">
        <ul className="text-center font-semibold flex justify-evenly items-center">
          <li className="w-16 mx-2 hover:underline">Home</li>
          <li className="w-16 mx-2 hover:underline">About</li>
          <li className="w-16 mx-2 hover:underline">Skills</li>
          <li className="w-16 mx-2 hover:underline">Works</li>
          <li className="w-16 mx-2 hover:underline">Contact</li>
        </ul>
      </nav>
    </header>
  );
}