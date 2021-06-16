Rails.application.routes.draw do
  post 'signup', to: 'users#sign_up'
  post 'login', to: 'sessions#create'
  get 'gifs', to: 'gif#index'
  get 'gifs', to: 'gif#select_gif'
  get 'gifs', to: 'gifs#show'
  resources :gifs
end
