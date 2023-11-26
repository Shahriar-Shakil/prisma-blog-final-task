import Link from "next/link";
import Breadcrumb from "../Breadcrumb";

export default function PageHeading({ title, actionTitle, navigateTo }) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1"></div>
      <div className="mt-4 flex md:ml-4 md:mt-0">
        <Link
          href={navigateTo}
          className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {actionTitle}
        </Link>
      </div>
    </div>
  );
}
