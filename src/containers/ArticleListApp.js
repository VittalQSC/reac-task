import React, { Component, PropTypes } from 'react';
import styles from './ArticleListApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ArticlesActions from '../actions/ArticlesActions';
import { ArticleList, AddArticleInput } from '../components';

@connect(state => ({
  articlelist: state.articlelist
}))
export default class ArticleListApp extends Component {

  static propTypes = {
    articlesById: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const { articlelist: { articlesById }, dispatch } = this.props;
    const actions = bindActionCreators(ArticlesActions, dispatch);

    return (
      <div className={styles.articleListApp}>
        <h1>The FriendList</h1>
        <AddArticleInput addArticle={actions.addArticle} />
        <ArticleList articles={articlesById} actions={actions} />
      </div>
    );
  }
}
