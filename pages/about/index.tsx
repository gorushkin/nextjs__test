import Router from 'next/router';
import { MainLayout } from '../../components/MainLayout';

const About = ({ data }) => {
  const clickHandler = () => {
    Router.push('../');
  };

  return (
    <MainLayout title={'About'}>
      <h1>{data.title}</h1>
      <p></p>
      <button onClick={clickHandler}>Go back to home</button>
    </MainLayout>
  );
};

// interface

About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about/`);
  const data = await response.json();
  return { data };
};

export default About;
