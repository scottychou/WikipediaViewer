class SearchForm extends React.Component {
	render() {
		return (
      <div>
        CLICK AND HIT ENTER TO SEARCH
        <form className="search-form" onSubmit={this._handleSubmit.bind(this)}>
          <input placeholder="search something" ref={input => this._search = input}/>
          <button type="submit">SEARCH HERE</button>
        </form>
      </div>
    );
	}
  _handleSubmit(event) {
    event.preventDefault();
    let search = this._search.value;
    let parameters = 'https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&namespace=0&format=json&search='
    let url = parameters + search
    let searchObject = $.ajax({
      dataType: "jsonp",
      url: url,
    });
    searchObject.then( response => {
      this.props.handleResponse(response)
    })
  };
}
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
class SearchBox extends React.Component {
  constructor(){
    super();
    this.state = {
      showSearches:false,
			searchText:null,
      searches:[],
			searchesBody:[],
			searchesURL:[]
    };
  }
  render() {
    const searchList = this._getSearches();
    let searchNodes;
    if(this.state.showSearches) {
      searchNodes = <div className="search-list">{searchList}</div>;
    }
    return (
      <div id="searchBox">
        <SearchForm handleResponse={this._handleResponse.bind(this)} />
				{searchNodes}
      </div>
    )
  }
  _handleResponse(data) {
		this.setState({
			showSearches:true,
			searchText: data[0],
			searches:data[1],
			searchesBody:data[2],
			searchesURL:data[3]
		});
  }
  _getSearches() {
		const arrayLength = this.state.searches.length;
		let arr = [];
		for(var i=0; i<arrayLength; i++) {
			arr.push(
				<Search
					header={this.state.searches[i]}
					key={i} body={this.state.searchesBody[i]}
					url={this.state.searchesURL[i]}
			 	/>
			)
		}
		return arr;
  }
}
ReactDOM.render(
  <SearchBox />, document.getElementById('app')
);
