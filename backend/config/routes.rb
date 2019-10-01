Rails.application.routes.draw do

 get '/teams/:id/players', to: 'teams#players'
  resources :players
  resources :teams
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
