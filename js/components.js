class SearchBox extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     searched:false;
  //   };
  // }
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
    let parameters = '?action=opensearch&limit=10&namespace=0&format=json&search='
    var cb = '&callback=JSON_CALLBACK';
    let url = 'https://en.wikipedia.org/w/api.php'+parameters+search+cb
    // console.log(url);
    $.getJSON(url);
  }
}

class SearchContainer extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     searches:{};
  //   };
  // }
  // render() {
  //   return (
  //     <div>
  //       {searches.map(search =>
  //         <h1></h1>
  //         <p></p>
  //        )}
  //
  //     </div>
  //   )
  // }
}


ReactDOM.render(
  <SearchBox />, document.getElementById('mainDiv')
);
