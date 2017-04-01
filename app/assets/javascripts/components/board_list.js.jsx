class BoardList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var lines = [];
    var i;

    for (i = 0 ; i < this.props.datas.length ; i++){
      var data = this.props.datas[i];
      lines.push(<BoardLine data={data} key={data.id} />);
    }


    return (
      <div>
        <h2>掲示板一覧</h2>
        <div className="blist">
           {lines}
        </div>
      </div>
    );
  }

}

class BoardLine extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="board-line">
        <label className="board-id">
           {this.props.data.id}
        </label>
        <label className="board-title">
           {this.props.data.title}
        </label>

      </div>
    );
  }

}
