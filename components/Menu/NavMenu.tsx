const navMenuArray = ["Call us Now", "Wishlist", "Shopping Cart"];

export default function NavMenu() {
  return (
    <ul className="flex item-center">
      {navMenuArray.map((navList) => (
        <li className="mx-2" key={navList}>
          {navList}
        </li>
      ))}
    </ul>
  );
}
