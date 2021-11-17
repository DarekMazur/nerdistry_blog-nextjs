import React, { useContext } from 'react';
import PostContentListItem from '../../atoms/PostContentListItem/PostContentListItem';
import { PostDetailsContext } from '../../organisms/PostsList/PostsList';
import { List } from './PostContentList/PostContentList.style';

const PostContentList = ({ isTagList }) => {
  const { details } = useContext(PostDetailsContext);

  const list = isTagList ? (details.tagsItems ? details.tagsItems.split(', ') : null) : details.categoriesItems;

  return (
    <List isTagList={isTagList}>
      {list
        ? list.map((listItem) => (listItem ? <PostContentListItem listItem={isTagList ? listItem : listItem.Name} isTagList={isTagList} /> : null))
        : null}
    </List>
  );
};

export default PostContentList;
