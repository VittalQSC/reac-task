import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddArticleInput.css';

export default class AddArticleInput extends Component {
  static propTypes = {
    addArticle: PropTypes.func.isRequired
  }

  render () {
    return (
      <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addArticleInput)}
        placeholder="Type the name of a article"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addArticle(name);
      this.setState({ name: '' });
    }
  }

}
