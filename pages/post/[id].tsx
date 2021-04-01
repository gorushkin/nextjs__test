import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MainLayout } from '../../components/MainLayout';
import { NextPageContext } from 'next';
import { MyPost } from '../../styles/interfaces/post';


interface PostPageProps {
  post: MyPost
}

const Post = ({ post: serverPost }: PostPageProps) => {
  const router = useRouter();
  const [post, setPost] = useState(serverPost);

  useEffect(() => {
    if (!serverPost) {
      fetch(`${process.env.API_URL}/posts/${router.query.id}`)
        .then((data) => data.json())
        .then((data) => {
          setPost(data);
        });
    }
  }, []);

  if (!post) {
    return <MainLayout>Loading....</MainLayout>;
  }

  return (
    <>
      <h1>{`Posts #${router.query.id}`}</h1>
      <p>{post.body}</p>
      <Link href={'/posts'}>
        <a>Back</a>
      </Link>
    </>
  );
};

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Post.getInitialProps = async ({ req, query }: PostNextPageContext) => {
  if (!req) {
    return { backPost: null };
  }
  const response = await fetch(`${process.env.API_URL}/posts/${query.id}`);
  const post: MyPost = await response.json();
  return { post };
};

export default Post;
