import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PaginationWrapper, PaginationElement } from './Pagination.style';
import slugify from 'slugify';

const Pagination = ({ pagination }) => {
  return (
    <PaginationWrapper isFirst={pagination.previousElement === 'first'}>
      {pagination.previousElement !== 'first' ? (
        <Link href={`/posts/${slugify(pagination.previousElement, { remove: /[*+~.()'"!:@]/g, lower: true })}`}>
          <PaginationElement>
            <FontAwesomeIcon icon={['fas', 'chevron-left']} />
            <span>{pagination.previousElement}</span>
          </PaginationElement>
        </Link>
      ) : null}
      {pagination.nextElement !== 'last' ? (
        <Link href={`/posts/${slugify(pagination.nextElement, { remove: /[*+~.()'"!:@]/g, lower: true })}`}>
          <PaginationElement>
            <span>{pagination.nextElement}</span>
            <FontAwesomeIcon icon={['fas', 'chevron-right']} />
          </PaginationElement>
        </Link>
      ) : null}
    </PaginationWrapper>
  );
};

export default Pagination;
