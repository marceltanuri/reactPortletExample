class Clock extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {date: new Date()};
	  }

	  componentDidMount() {
	    this.timerID = setInterval(
	      () => this.tick(),
	      5000
	    );
	  }

	  componentWillUnmount() {
	    clearInterval(this.timerID);
	  }

	  tick() {
		  fetch("/react-example-portlet/services/hello").then(response => response.json()).then(result => {
		      this.setState({
		    	  date: result
		      });
		  });
	  }
	  

	  render() {
		  return React.createElement('div', null , 'Hello world! ' + new Date(this.state.date));
	  }
	}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Clock, null, null), domContainer);