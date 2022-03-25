import Link from "next/link";

const AppLayout = () => {
  return (
    <>
      <Link href="/bmi">
        <a>
          <h2>to Bmi</h2>
        </a>
      </Link>
      <Link href="/calc">
        <a>
          <h2>to Calc</h2>
        </a>
      </Link>
      <Link href="/count">
        <a>
          <h2>to Count</h2>
        </a>
      </Link>
      <Link href="/grade">
        <a>
          <h2>to Grade</h2>
        </a>
      </Link>
      <Link href="/">
        <a>
          <h2>to Index</h2>
        </a>
      </Link>
      <Link href="/login">
      <a>
        <h2>to Login</h2>
      </a>
    </Link>
    </>
  );
};

export default AppLayout;