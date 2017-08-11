import React from 'react';
import { Route, IndexRoute } from 'react-router';


import BaseContainer from './containers/Base/BaseContainer';
import HomeContainer from './containers/Home/IndexContainer';
import CategoriesContainer from './containers/Categories/IndexContainer';
import CategoryDetailsContainer from './containers/Categories/DetailsContainer';
import ProductDetailsContainer from './containers/Products/ProductDetailsContainer';

export const urls = {
  index: '/',
  posts: '/posts',
  postItem: '/posts/:postId',
  categories: '/categories',
  categoryItem: '/categories/:categoryId',
  productItem: '/product/:productId',

};

export const routes = (
  <Route path={urls.index} component={BaseContainer}>
    <IndexRoute component={HomeContainer} />
    <Route path={urls.categories} component={CategoriesContainer} />
    <Route path={urls.categoryItem} component={CategoryDetailsContainer} />
    <Route path={urls.productItem} component={ProductDetailsContainer} />
  </Route>
);
