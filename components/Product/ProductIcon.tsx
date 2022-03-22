interface Props {
  icons: Array<string>;
}

export default function ProductIcon({ icons }: Props) {
  return (
    <ul className="flex flex-col">
      {icons.map((icon) => (
        <li
          key={icon}
          className="h-10 w-10 rounded-full bg-white hover:bg-blue hover:text-white"
        >
          <i className={icon} />
        </li>
      ))}
    </ul>
  );
}
