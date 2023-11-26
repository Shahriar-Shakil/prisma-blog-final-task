"use client";
import { Dropdown } from "antd";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { CiMenuKebab } from "react-icons/ci";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function TeamMemberCard({ person }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/dashboard/team`, {
        data: { id: person.id },
      });
      if (res.data.status === "success") {
        router.refresh();
        toast.success(res.data.data);
      } else {
        toast.error(res.data.data);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  const items = [
    {
      label: <Link href={`/dashboard/team/${person.id}`}>View</Link>,
      key: "0",
    },
    {
      label: <button onClick={handleDelete}>Delete</button>,
      key: "1",
    },
  ];
  return (
    <li className="relative  col-span-1 rounded-lg bg-slate-50 shadow group">
      <div className="divide-y divide-gray-200 ">
        <div className="flex w-full items-center justify-between space-x-6 p-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="truncate capitalize text-sm font-medium text-gray-900">
                {person.name}
              </h3>
            </div>
            <p className="mt-1 truncate text-sm text-gray-500">{person.role}</p>
          </div>
          <img
            className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
            src={person.profile_image_url}
            alt=""
          />
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            {person.facebook_url ? (
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.facebook_url}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <FaFacebook
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            ) : (
              <></>
            )}
            {person.twitter_url ? (
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.twitter_url}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <FaTwitter
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            ) : (
              <></>
            )}
            {person.linkedIn_url ? (
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.linkedIn_url}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <FaLinkedin
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <button
          className="hidden group-hover:block absolute top-0 right-0 p-2 border-0"
          onClick={(e) => e.preventDefault()}
        >
          <CiMenuKebab />
        </button>
      </Dropdown>
    </li>
  );
}
