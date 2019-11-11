Rails.application.routes.draw do
  root 'homes#index'
  get '/stations', to: 'homes#index'
  get '/stations/:id', to: 'homes#index'

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :stations, only: [:index, :show] do
        resources :reviews, only: [:create]
      end
    end
  end
end