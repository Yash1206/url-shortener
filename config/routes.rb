Rails.application.routes.draw do
  post '/url' => "urls#create"
  get '/show' => "urls#show"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
