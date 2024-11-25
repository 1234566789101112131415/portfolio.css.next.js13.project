// app/page.js
export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <header style={{ background: '#ff6347', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 className="logo" style={{ fontSize: '2.5em', fontWeight: 'bold' }}>My Portfolio</h1>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
            <li style={{ display: 'inline', margin: '0 15px' }}>
              <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2em' }}>Home</a>
            </li>
            <li style={{ display: 'inline', margin: '0 15px' }}>
              <a href="#about" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2em' }}>About</a>
            </li>
            <li style={{ display: 'inline', margin: '0 15px' }}>
              <a href="#projects" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2em' }}>Projects</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <div className="home" style={{ padding: '30px 20px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', margin: '20px auto', maxWidth: '1200px' }}>
        <h2>Welcome to My Portfolio!</h2>
        <p>Explore my projects and get to know me better.</p>
      </div>

      {/* About Section */}
      <div id="about" className="about" style={{ padding: '30px 20px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', margin: '20px auto', maxWidth: '1200px' }}>
        <h2>About Me</h2>
        <p>I am a passionate developer who loves creating amazing web experiences.</p>
      </div>

      {/* Projects Section */}
      <div id="projects" className="projects" style={{ padding: '30px 20px', textAlign: 'center', backgroundColor: '#ffe4e1', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', margin: '20px auto', maxWidth: '1200px' }}>
        <h2>My Projects</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ background: '#ffebcd', margin: '10px 0', padding: '15px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <a href="https://project1.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#ff6347', fontWeight: 'bold', fontSize: '1.2em' }}>
              Project 1: Amazing Web App
            </a>
          </li>
          <li style={{ background: '#ffebcd', margin: '10px 0', padding: '15px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <a href="https://project2.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#ff6347', fontWeight: 'bold', fontSize: '1.2em' }}>
              Project 2: E-Commerce Site
            </a>
          </li>
          {/* Add more projects here */}
        </ul>
      </div>

      {/* Footer Section */}
      <footer style={{ background: '#ff6347', color: 'white', padding: '15px 0', textAlign: 'center' }}>
        <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
