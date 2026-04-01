import Link from "next/link";
import Counter from "../components/Counter";

export default function CounterPage() {
  return (
    <div className="container">
      <h1 className="pageTitle">Counter Page</h1>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/counter">Counter</Link>
        <Link href="/form">Form</Link>
      </nav>

      <Counter />
    </div>
  );
}