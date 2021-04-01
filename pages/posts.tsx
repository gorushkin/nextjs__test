import { MainLayout } from '../components/MainLayout';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MyPost } from '../styles/interfaces/post';
import { NextPageContext } from 'next';

interface PostPageProps {
  posts: MyPost[];
}

console.log(`${process.env.API_URL}/posts`);

const Posts = ({ posts: serverPosts }: PostPageProps) => {
  // const [posts, setPosts] = useState(serverPosts);

  // useEffect(() => {
  //   if (!serverPosts) {
  //     fetch(`${process.env.API_URL}/posts`)
  //       .then((data) => data.json())
  //       .then((data) => {
  //         setPosts(data);
  //       });
  //   }
  // }, []);

  // if (!posts) {
  //   return <MainLayout>Loading....</MainLayout>;
  // }

  return (
    <MainLayout>
      <h1>Posts</h1>
      <ul>
        {serverPosts.map((item) => (
          <li key={item.id}>
            <Link href={`/post/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

// Posts.getInitialProps = async ({ req }: NextPageContext) => {
//   if (!req) {
//     return { posts: null };
//   }
//   const response = await fetch(`${process.env.API_URL}/posts`);
//   const posts: MyPost[] = await response.json();
//   return { posts };
// };

// export async function getServerSideProps(ctx) {
//   if (!ctx.req) {
//     return { posts: null };
//   }
//   const response = await fetch('http://localhost:4200/posts');
//   const posts = await response.json();
//   return { props: { posts } };
// }

export async function getStaticProps(context) {
  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts: MyPost[] = await response.json();
  return {
    props: {posts}, // will be passed to the page component as props
  }
}

export default Posts;
