Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

post 'signup', to: 'registrations#signup'
post 'login', to: 'registrations#login'

delete 'logout', to: 'sessions#logout'
get 'logged_in', to: 'sessuibs#logged_in?'


end
