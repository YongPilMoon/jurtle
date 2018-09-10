import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'containers/list/ListContainer';
import CategoryContainer from 'containers/list/CategoryConatiner';

const ListPage = ({match}) => {
  const { page = 1, tag } = match.params;

  return (
    <PageTemplate>
      <CategoryContainer/>
      <ListWrapper>
        <ListContainer
          page={parseInt(page, 10)}
          tag={tag}
        />
      </ListWrapper>
    </PageTemplate>
  );
};

export default ListPage;
