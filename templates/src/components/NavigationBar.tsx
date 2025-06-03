// components/NavigationBar.tsx
import Link from "next/link";

type TMenu = {
  id: number;
  name: string;
  path: string;
};
interface Props {
  menus: TMenu[];
}

const NavigationBar = (props: Props) => {
  const { menus = [] } = props;
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 left-0 w-full z-50 shadow-md">
      <ul className="flex justify-center space-x-6">
        {menus.map((menu) => (
          <li key={menu.id}>
            <Link
              href={menu.path}
              className="text-white hover:text-gray-300 text-lg"
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
