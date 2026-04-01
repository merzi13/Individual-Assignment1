import Link from "next/link";
import Form from "../components/Form";

export default function FormPage() {
  return (
    <div className="container">
      <h1 className="pageTitle">Form Page</h1>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/counter">Counter</Link>
        <Link href="/form">Form</Link>
      </nav>

      <Form />
    </div>
  );
}