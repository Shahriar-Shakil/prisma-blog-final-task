import ProfileForm from "@/components/Forms/ProfileForm";
import axiosInstance from "@/lib/axios";
import { prisma } from "@/lib/prismaConfig";
import axios from "axios";
import { headers } from "next/headers";

export const getData = async () => {
  const hederList = headers();
  const userID = parseInt(hederList.get("id"));
  const user = await prisma.users.findUnique({
    where: { id: userID },
    select: {
      firstName: true,
      lastName: true,
      profile_image_url: true,
      mobile: true,
      email: true,
    },
  });
  return user;
};
export default async function page() {
  const user = await getData();

  return (
    <div className="py-5">
      <ProfileForm user={user} />
    </div>
  );
}
