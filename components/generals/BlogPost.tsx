import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface BlogPostProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
function BlogPost({data}:BlogPostProps) {
  return (
    <div className=" group relative overflow-hidden shadow-md transition-all hover:shadow-lg rounded-lg border-gray-200 bg-white">
      <Link href={`/post/${data.id}`} className="h-full w-full block">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className=" object-cover group-hover:scale-105 transition-all duration-500"
            priority
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold">{data.title}</h2>
          <p className="text-gray-600 line-clamp-2">{data.content}</p>
          <div className="flex items-center mt-2 justify-between">
            <div className="flex items-center gap-2">
              <div className="relative size-8 overflow-hidden">
                <Image
                  src={data.authorImage}
                  alt={data.authorId}
                  fill
                  priority
                  className=" object-cover group-hover:scale-105 transition-all duration-500 rounded-full"
                />
              </div>
              <span className="text-sm font-medium">{data.authorName}</span>
            </div>
            <time  className="text-sm text-gray-500">{ new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(data.createdAt)}</time>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogPost