import React from 'react';
import { ListItem } from './PostContentListItem.style';

const PostContentListItem = ({ listItem, isTagList }) => {
  return <ListItem>{isTagList ? `#${listItem}` : listItem}</ListItem>;
};

export default PostContentListItem;
