import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';

import styles from './ArticleList.css';
import ArticleListItem from './ArticleListItem';

export default class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    return (
      <ul className={styles.articleList}>
        {
          mapValues(this.props.articles, (article) => {
            return (<ArticleListItem
              key={article.id}
              id={article.id}
              name={article.name}
              starred={article.starred}
              {...this.props.actions} />);
          })
        }
      </ul>
    );
  }

}
