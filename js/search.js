class Search extends React.Component {
  render() {
    return (
			<div className="search">
				<p className="search-header">{this.props.header}</p>
				<p className="search-body">{this.props.body}</p>
        <p className="search-url"><a href={this.props.url} target="_blank">{this.props.url}</a></p>
			</div>
    )
  }
}
