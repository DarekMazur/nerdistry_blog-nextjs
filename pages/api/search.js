export default (req, res) => {
  const posts = async () => {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts`);
    const allPosts = await result.json();

    const searchKeyWords = req.body.search.toLowerCase().split(', ');

    const results = req.body.search
      ? allPosts.filter(
          (post) =>
            searchKeyWords.some((keyWord) => post.Tags?.toLowerCase().split(', ').includes(keyWord)) ||
            post.Title?.toLowerCase().includes(req.body.search.toLowerCase()) ||
            post.Content?.toLowerCase().includes(req.body.search.toLowerCase())
        )
      : [];

    res.statusCode = 200;
    res.end(JSON.stringify(results));
  };

  posts();
};
