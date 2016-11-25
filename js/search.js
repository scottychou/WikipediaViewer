class Search extends React.Component {
  render() {
    return (
			<div className="search">
				<p className="search-header">{this.props.header}</p>
				<p className="search-body">{this.props.body}</p>
			</div>
    )
  }
}
