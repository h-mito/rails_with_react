class BoardAndComment extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="bandc">
        <div className="left-side">
          <BoardList2 />
        </div>

        <div className="right-side">
          <CommentAdd />
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

  render(){
    return (
      <div>
        掲示板一覧を表示する場所です。
      </div>
    );
  }

}

class CommentAdd extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        掲示板に投稿を追加する機能を表示する場所です。
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
