import { headers } from "next/headers";
import SideNavHeader from "./SideNavHeader";
import { prisma } from "@/lib/prismaConfig";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const getData = async () => {
  const headerList = headers();
  let user_id = parseInt(headerList.get("id"));
  return await prisma.users.findUnique({ where: { id: user_id } });
};
export default async function SideLayout({ children }) {
  const data = await getData();
  return (
    <>
      <div>
        <SideNavHeader user={data} />
        <main className=" lg:pl-72">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
