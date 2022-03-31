

const menuArray = [
  "Account",
  "EUR",
  "Contact",
  "Need Help",
  "Sign in / Register",
];

export default function HeadertopMenu() {
  return (
    <ul className="flex items-center justify-between">
      {menuArray.map((menuItem) => (
        <li className="mx-2" key={menuItem}>{menuItem}</li>
      ))}
    </ul>
  );
}
