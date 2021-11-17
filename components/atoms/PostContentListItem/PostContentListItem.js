import React from 'react';
import Link from 'next/link';
import { ListItem } from './PostContentListItem.style';
import slugify from 'slugify';

const PostContentListItem = ({ listItem, isTagList }) => {
  return (
    <ListItem>
      {isTagList ? (
        `#${listItem}`
      ) : (
        <Link href={`/category/${slugify(listItem, { remove: /[*+~.()'"!:@]/g, lower: true })}`}>
          <a>{listItem}</a>
        </Link>
      )}
    </ListItem>
  );
};

export default PostContentListItem;
