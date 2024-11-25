// components/Header.js
export default function Header() {
    return (
      <header>
        <h1 className="logo">My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  