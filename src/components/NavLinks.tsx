import Link from "next/link";
import { useRouter } from "next/router";

export const NavLinks = () => {
  const router = useRouter();
  return (
    <>
      <li>
        <Link href={"/teams"}>Teams</Link>
      </li>
      <li>
        <Link href={"/players"}>Players</Link>
      </li>
    </>
  );
};
