import Link from 'next/link';
import Head from 'next/head';

export const MainLayout = ({ children, title = 'Something strange!!!' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <ul>
          <li>
            <Link href={'/about'}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href={'/posts'}>
              <a>Posts</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        ul {
          display: flex;
          list-style: none;
        }

        li {
          margin-right: 15px;
        }
      `}</style>
    </>
  );
};
