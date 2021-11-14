import React from 'react';
import PostContentListItem from '../../atoms/PostContentListItem/PostContentListItem';
import { List } from './PostContentList/PostContentList.style';

const PostContentList = ({ list, isTagList }) => {
  return (
    <List isTagList={isTagList}>
      {list ? list.map((listItem) => (listItem ? <PostContentListItem listItem={listItem} isTagList={isTagList} /> : null)) : null}
    </List>
  );
};

export default PostContentList;
