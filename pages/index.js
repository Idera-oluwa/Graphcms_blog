import Head from 'next/head'
import React,{useState} from 'react';
import { FeaturedPosts } from '../sections/index';
import {PostCard, Categories, PostWidget,Sidebar} from '../components'
import {getPosts} from '../services';

export default function Home({posts}) {
  return (
    <div className='container mx-auto md:px-10 mb-8'>
      <Head>
        <title>Derah Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
      <div className="lg:col-span-8 col-span-1">
      {posts.map((post, index)=>{
        return(
       <PostCard post={post.node} key={post.title}/>
        )
      })}
      </div>
            <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
            <PostWidget/>
            <Categories/>
            </div>
      </div>

</div>
    </div>
  )
}

export async function getStaticProps(){
  const posts =(await getPosts()) || [];

return{ 
  props:{posts}
}
}