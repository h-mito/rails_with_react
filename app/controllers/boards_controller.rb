class BoardsController < ApplicationController
  def index
    @boards = Board.all
  end

  def bandc
    @boards = Board.all
  end

end
