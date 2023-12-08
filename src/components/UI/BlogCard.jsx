import Link from "next/link";
import MomentComponent from "./MomentComponent";

export default function BlogCard({ post }) {
  return (
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
  );
}
