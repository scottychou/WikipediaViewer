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
