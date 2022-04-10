import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <>
      <nav className="navbar">
        <Link href="/">
          <a className={`link ${router.pathname === '/' ? 'active' : ''}`}>Home</a>
        </Link>
        {' '}
        <Link href="/about">
          <a className={`link ${router.pathname === '/about' ? 'active' : ''}`}>About Us</a>
        </Link>
        <Link href="/coins">
          <a className={`link ${router.pathname === '/coins' ? 'active' : ''}`}>Coin</a>
        </Link>
      </nav>

      <style jsx>{`
        .navbar {
          padding: 10px 0;

          .link {
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px 3px #ddd;
            color: #777;
            background-color: #fff;
            font-weight: bold;

            &.active {
              color: #0a0;
            }
          }
        }
      `}</style>
    </>
  );
}
