export default (req, res) => {
  const posts = async () => {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts`);
    const allPosts = await result.json();

    const results = req.body.search ? allPosts.filter((post) => post.Tags?.toLowerCase().includes(req.body.search.toLowerCase())) : [];

    res.statusCode = 200;
    res.end(JSON.stringify(results));
  };

  posts();
};
