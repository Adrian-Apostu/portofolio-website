import profilePic from '../assets/profile_pic.jpeg';

function Header() {
  return (
    <header className="header">
      <img src={profilePic} alt="Adrian Apostu" />
      <h1>Adrian Apostu</h1>
    </header>
  );
}

export default Header;
