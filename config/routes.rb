Rails.application.routes.draw do
  post '/create' => "urls#create"
  get '/show/:short_url' => "urls#show"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
