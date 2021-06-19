Rails.application.routes.draw do
  post 'signup', to: 'users#sign_up'
  post 'login', to: 'sessions#create'
  get 'gifs', to: 'gif#index'
  post 'saved', to: 'gif#save'
  put 'saved', to: 'gif#save'
  get 'saved', to: 'gif#show_saved'
  patch 'update', to: 'gif#update' 
  put 'update', to: 'gif#update' 
  # get 'saved', to: 'gif#show_user_gifs'
  # get 'gifs', to: 'gifs#show'
  # resources :gifsx
end
