import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';



const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    
    fetchCollectionsStart();
  }, [fetchCollectionsStart])

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
      <Route
        path={`${match.path}/:collectionId`}
        component={ CollectionPageContainer }
      />
    </div>
  );
  
}



const mapDispatchToProp = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProp)(ShopPage);