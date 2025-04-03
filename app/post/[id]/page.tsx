import { getUniquePost } from '@/app/actions';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const PostDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const data= await getUniquePost(id);
  
  return (
    <div className='max-w-3xl mx-auto pt-15'>
      <Link href="/" className={buttonVariants({variant:'secondary'})}>Back to Posts</Link>
      <h1 className='text-3xl font-bold tracking-tight my-8 text-center'>{data.title}</h1>
      <div className="flex items-center gap-10 mb-20 justify-center ">
        <div className="flex items-center">
          <div className="relative size-8 rounded-full overflow-hidden">
            <Image
              src={data.authorImage}
              alt={data.authorName}
              fill
              className=" object-cover"
              priority
            />      
          </div>
          <span className="ml-2 text-sm font-medium">{data.authorName}</span>
        </div>
        <time  className="text-sm text-gray-500">{ new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(data.createdAt)}</time>
      </div>
      <div className="relative overflow-hidden h-[400px] mb-4 rounded-lg">
        <Image
          src={data.imageUrl}
          alt={data.title}
          fill
          className=" object-cover"
          priority
        />
      </div>
      <Card>
        <CardContent>{data.content}</CardContent>
      </Card>
          
    </div>
  )
}

export default PostDetails