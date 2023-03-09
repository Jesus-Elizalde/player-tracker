import Link from "next/link";

export const NavLinks = () => {
  return (
    <>
      <li>
        <Link href={"/teams"}>Teams</Link>
      </li>
      {/* <li>
        <Link href={"/players"}>Players</Link>
      </li> */}
    </>
  );
};
