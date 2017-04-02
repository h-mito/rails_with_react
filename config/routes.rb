Rails.application.routes.draw do
  get 'boards/index'

  get 'first/index'

  get 'boards/bandc'
  post 'boards/insertComment'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
