import Link from 'next/link';


const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg mt-2">I'm Amna, learning web developing</p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-300 transition-colors">About</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-yellow-300 transition-colors">Projects</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
