import Highlight from '../components/organisms/Highlight/Highlight';
import LatestBlog from '../components/organisms/LatestBlog/LatestBlog';

const Home = ({ posts }) => {
  return (
    <>
      <Highlight />
      <LatestBlog posts={posts} />
      <section>
        <p>lorem Ipsum</p>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };
}

export default Home;
