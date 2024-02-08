import { sortBlogs } from '@/src/utils';
import Link from 'next/link';
import React from 'react';
import BlogLayoutThree from '@/src/components/Blog/BlogLayoutThree';

const RecentPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);
  return (
    <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
        <div className='flex w-full justify-between'>
        <h2 className='inline-block font-bold capitalize text-4xl'>
        Mehr Gedanken
        </h2>
        <Link href='/kategorien/alle' className='inline-block font-medium text-orange-500 underline underline-offset-2 text-lg'>
        alle Gedanken
        </Link>
        </div>

        <div className='grid grid-cols-3 grid-rows-2 gap-16 mt-16'>
            {
                sortedBlogs.slice(5, 11).map((blog, index) => {
                    return <article key={index} className='col-span-1 row-span-1 relative'>
                        <BlogLayoutThree blog={blog} />
                    </article>
                })
            }
        </div>
    </section>
  )
}

export default RecentPosts