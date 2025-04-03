'use server'
import { prisma } from '@/lib/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { notFound, redirect } from 'next/navigation';

export async function createPost(data: FormData) {
    const { getUser} = await getKindeServerSession();
    const user = await getUser();
    const title = data.get('title') 
    const content = data.get('content') 
  const imageUrl = data.get('imageUrl')
  
  if(!user){
    return redirect('/api/auth/register');
  }

    await prisma.post.create({
        data: {
            title: title as string,
            content: content as string,
            imageUrl: imageUrl as string,
            authorId: user.id as string,
            authorName: user.given_name as string,
            authorImage: user.picture as string
        }
    }) 
    return redirect('/dashboard');
}

export async function getPosts() {
 
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (!posts) {
      return notFound();
    }
      
    return posts;
    
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to fetch posts');
  }
}

export async function getUniquePost(id: string) {
  if(!id || typeof id !== 'string'){
    throw new Error('Invalid id provided');
  }
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    if (!post) {
      return notFound();
    }
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw new Error('Failed to fetch post');
  }
}
