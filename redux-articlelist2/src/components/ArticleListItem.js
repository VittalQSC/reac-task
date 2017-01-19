import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './ArticleListItem.css';

export default class ArticleListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starred: PropTypes.bool,
    starFriend: PropTypes.func.isRequired,
    deleteFriend: PropTypes.func.isRequired
  }

  render () {
    return (
      <li className={styles.articleListItem}>
        <div className={styles.articleInfos}>
          <div><span>{this.props.name}</span></div>
          <div><small>xx articles in common</small></div>
        </div>
        <div className={styles.articleActions}>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.starArticle(this.props.id)}>
            <i className={classnames('fa', { 'fa-star': this.props.starred }, { 'fa-star-o': !this.props.starred })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.deleteArticle(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}
