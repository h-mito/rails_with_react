Rails.application.routes.draw do
  get 'boards/index'

  get 'first/index'

  get 'boards/bandc'
  post 'boards/insertComment'
  get 'boards/readComments/:board_id' => 'boards#readComments'
  get 'boards/readBoard/:board_id' => 'boards#readBoard'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
