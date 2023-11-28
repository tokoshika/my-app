import Link from "next/link";

export default function Nav() {
  return (
    <>
      <Link className="link" href="/">
        Home
      </Link>
      <Link className="link" href="tenki">
        気象庁
      </Link>
      <Link className="link" href="about">
        About
      </Link>
    </>
  );
}
