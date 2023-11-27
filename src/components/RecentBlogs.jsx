import { prisma } from "@/lib/prismaConfig";
import MomentComponent from "./UI/MomentComponent";
import Link from "next/link";

async function getData() {
  const res = await prisma.blog.findMany({
    orderBy: { id: "desc" },
    take: 3,
    include: { author: true },
  });
  return res;
}
export default async function RecentBlogs() {
  const blogs = await getData();
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <MomentComponent className="text-gray-500" format="Mmm dd YYYY">
                  {post.updateAt}
                </MomentComponent>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.summary}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.profile_image_url}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {post.author.firstName}
                  </p>
                  <p className="text-gray-600">Writer</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
