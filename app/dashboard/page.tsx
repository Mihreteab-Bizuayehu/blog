import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import { getPosts } from '../actions';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import BlogPost from '@/components/generals/BlogPost';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();
  const posts = await getPosts();

  if (!user) {
    return redirect('/api/auth/register');
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Your Articles</h1>
        <Link href="/dashboard/create" className={buttonVariants()}>Create Post</Link>
      </div> 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post) => <BlogPost key={post.id} data={post} />)}
      </div>
    </div>
  );
}

export default Dashboard