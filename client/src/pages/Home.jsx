import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import WelcomeParallax from '../components/Welcome';
import NewsletterSubscription from '../components/NewsletterSubscription';


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://blogzihad-api.vercel.app/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>

<WelcomeParallax/>

     

      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>

<div className='h-[100%]'>
<NewsletterSubscription/>

</div>




      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
         <div className='flex'>

         <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>

            <div className='border border-teal-500 hover:border-2 overflow-hidden rounded-lg sm:w-[600px] transition-all relative'>

       <h1 className='rotate-90 absolute text-7xl pt-24 pl-16'>
     sPERSONAL    s BLOG
        </h1>

         </div>

         </div>

            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
