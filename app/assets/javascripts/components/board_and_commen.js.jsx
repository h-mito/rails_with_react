class BoardAndComment extends React.Component{
  constructor(props){
    super(props);
    this.state = {comment: '', user_id: 1, board_id: -1, board_title: '', board_description: ''};
  }

  handleCommentChange(cm){
    this.setState({comment: cm});
  }

  handleUserChange(id){
    this.setState({user_id: id});
  }

  handleBoardSelect(id){
    this.setState({board_id: id});
  }

  handleCommentAdd(){
    var svThis = this;

    if (this.state.board_id == -1){
      alert("書き込み対象の掲示板を選択してください");
      return;
    }

    var data = {
      board_id: this.state.board_id,
      user_id: this.state.user_id,
      comment: this.state.comment,
    };

    $.ajax({
       type: "POST",
       url: "/boards/insertComment",
       async: false,
       dataType: "json",
       data: data,
       success: function(data, dataType){
         //alert(data.status + "--" + data.row.company_name)
         if (data.status == true){
           alert("投稿成功");
         }
       },
       error :function(XMLHttpRequest, textStatus, errorThrown){
       }
    });
  }

  render(){
    return (
      <div className="bandc">
        <div className="left-side">
          <BoardList2
            datas={this.props.datas}
            onBoardSelect={(id) => this.handleBoardSelect(id)}
           />
        </div>

        <div className="right-side">
          <CommentAdd
            users={this.props.users}
            onUserChange={(uid) => this.handleUserChange(uid)}
            onCommentChange={(cm) => this.handleCommentChange(cm)}
            onCommentAdd={() => this.handleCommentAdd()}
           />
          <CommentList />
        </div>
      </div>
    );
  }
}

class BoardList2 extends React.Component{
  constructor(props){
    super(props);
  }

  handleBoardSelect(id){
	  this.props.onBoardSelect(id);
  }


  render(){
    var lists = [];
    var i;
    for (i = 0; i < this.props.datas.length; i ++){
      var data = this.props.datas[i];
      lists.push(<BoardLine2
                    data={data}
                    key={data.id}
                    onBoardSelect={(id) => this.handleBoardSelect(id)}
                   />);
    }

    return (
      <div>
        掲示板一覧を表示する場所です。<br />
        {lists}
      </div>
    );
  }

}

class BoardLine2 extends React.Component{
  constructor(props){
    super(props);
  }

  handleOnClick(){
    this.props.onBoardSelect(this.props.data.id);
  }

  render(){
    return (
      <div className="blist2">
        <label className="board-title">
          {this.props.data.title}
        </label>
        <button onClick = {() => this.handleOnClick()} >
          選択
        </button>
      </div>
    );
  }
}

class CommentAdd extends React.Component{
  constructor(props){
    super(props);
  }

  handleOnUserChange(e){
    this.props.onUserChange(e.target.value);
  }

  handleOnCommentChange(e){
    this.props.onCommentChange(e.target.value);
  }

  handleCommentAdd(){
    this.props.onCommentAdd();
  }

  render(){
    var users = [];
    var i;
    for (i = 0 ; i < this.props.users.length ; i++){
      var user = this.props.users[i];
      users.push(<option value={user.id}>{user.name}</option>);
    }

    return (
      <div className="cadd">
        掲示板に投稿を追加する機能を表示する場所です。<br />
        <label className="span1">選択された掲示板</label>
        <label>{this.props.board_title}</label>
        <br />
        <label className="span1">掲示板詳細</label>
        <label>{this.props.board_description}</label>
        <br />
        <label className="span1">投稿ユーザー</label>
        <select onChange={(e) => this.handleOnUserChange(e)}>
          {users}
        </select>
        <br />
        <label className="span1">投稿内容</label>
        <br />
        <textarea
          rows = "4"
          value={this.props.comment}
          onChange={(e) => this.handleOnCommentChange(e)}
        />
        <button
          onClick={() => this.handleCommentAdd()}>
          投稿
        </button>
        <br />

      </div>
    );

  }
}

class CommentList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        掲示板内の投稿一覧を表示する場所です。
      </div>
    );
  }

}
