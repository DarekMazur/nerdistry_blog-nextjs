import React, { useContext } from 'react';
import PostContentListItem from '../../atoms/PostContentListItem/PostContentListItem';
import { List } from './PostContentList/PostContentList.style';

const PostContentList = ({ isTagList, details }) => {
  const list = isTagList ? (details.tagsItems ? details.tagsItems.split(', ') : null) : details.categoriesItems;
  // console.log(list);

  return (
    <List isTagList={isTagList}>
      {list
        ? list.map((listItem) =>
            listItem ? (
              <PostContentListItem key={isTagList ? listItem : listItem.Name} listItem={isTagList ? listItem : listItem.Name} isTagList={isTagList} />
            ) : null
          )
        : null}
    </List>
  );
};

export default PostContentList;
