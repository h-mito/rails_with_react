class BoardsController < ApplicationController
  def index
    @boards = Board.all
  end

  def bandc
    @boards = Board.all
    @users = User.all
  end

  def insertComment
    response = {status:true}

    c = Comment.new({board_id: params[:board_id], user_id: params[:user_id], comment: params[:comment]})
    c.save()

    render :json=> response

  end

  def readComments
    response = {status:true}

    recs = Comment.eager_load(:user).where("board_id = ?", params[:board_id])
            .order("comments.created_at DESC").as_json(include: :user)

    response["rows"] = recs

    render :json=> response
  end

  def readBoard
    response = {status:true}

    recs = Board.where("id = ?", params[:board_id])

    response["row"] = recs[0]

    render :json=> response
  end

end
