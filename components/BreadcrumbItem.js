import Link from "next/link";
import { convertToText } from "./Functions";

const BreadcrumbItem = ({ children, href, ...props }) => {
  return (
    <li {...props}>
      <Link
        href={href}
        passHref
        className="text-gray-600 dark:text-gray-200 hover:underline underline-offset-4"
      >
        <a className="text-white/70 hover:text-white text-sm capitalize">
          {children}
        </a>
      </Link>
    </li>
  );
};

export default BreadcrumbItem;
