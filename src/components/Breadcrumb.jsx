import { HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Breadcrumb({ pages }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol
        role="list"
        className="flex space-x-4 rounded-md bg-white px-6 shadow"
      >
        {pages?.map((page) => {
          if (page.name === "home") {
            return (
              <li key={page.name} className="flex">
                <div className="flex items-center">
                  <Link
                    href={page.href}
                    className={`${
                      page.current
                        ? "text-blue-500 hover:text-blue-700"
                        : "text-gray-400 hover:text-gray-500"
                    } `}
                  >
                    <HomeIcon
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home</span>
                  </Link>
                </div>
              </li>
            );
          } else {
            return (
              <li key={page.name} className="flex">
                <div className="flex items-center">
                  <svg
                    className="h-full w-6 flex-shrink-0 text-gray-200"
                    viewBox="0 0 24 44"
                    preserveAspectRatio="none"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                  </svg>
                  <Link
                    href={page.href}
                    className={`ml-4 text-sm font-medium ${
                      page.current
                        ? "text-blue-500 hover:text-blue-700"
                        : "text-gray-500 hover:text-gray-700"
                    } `}
                    aria-current={page.current ? "page" : undefined}
                  >
                    {page.name}
                  </Link>
                </div>
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
}
