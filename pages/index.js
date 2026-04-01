import Link from "next/link";
import Profile from "../components/Profile";

// Home page component
export default function Home() {
  return (
    <div className="container">

      {/* Hero section */}
      <div className="hero">
        <h1>Welcome to Assignment 1</h1>
      </div>

      {/* Navigation menu */}
      <nav>
        <Link href="/">Home</Link>
        <Link href="/counter">Counter</Link>
        <Link href="/form">Form</Link>
      </nav>

      {/* Profile component using props */}
      <Profile
        name="Meryem Kadam"
        project="Assignment 1"
        status="In Progress"
      />
    </div>
  );
}