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
  
end
