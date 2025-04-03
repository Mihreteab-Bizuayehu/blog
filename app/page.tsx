import { getPosts } from "./actions";
import { Suspense } from "react";
import BlogPost from "@/components/generals/BlogPost";

 export default function Home() {
  
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen text-2xl text-blue-500 font-extrabold">Loading...</div>}>
      <BlogPosts/>
    </Suspense>
  )
 
}

 export async function BlogPosts() {
  const posts = await getPosts();
  
   return (
     <div>
       <h1 className="text-3xl font-bold tracking-tight mb-4 ">Latest Posts</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {posts.map((post) =><BlogPost data={post} key={post.id}/>)}
       </div>
     </div>
   );
 }