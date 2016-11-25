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
