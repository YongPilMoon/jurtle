import React from 'react';
import { Helmet } from 'react-helmet';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'containers/list/ListContainer';
import CategoryContainer from 'containers/list/CategoryConatiner';
import ShowMoreButtonContainer from 'containers/common/ShowMoreButtonContainer';



const ListPage = ({ match }) => {
  const { page = 1, tag } = match.params;

  return (
    <PageTemplate>
      <Helmet>
        <title>Development blog jurtle</title>
      </Helmet>
      <CategoryContainer />
      <ListWrapper>
        <ListContainer
          page={parseInt(page, 10)}
          tag={tag}
        />
      </ListWrapper>
      <ShowMoreButtonContainer />
    </PageTemplate>
  );
};

export default ListPage;
