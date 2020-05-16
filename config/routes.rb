Rails.application.routes.draw do
  post '/url' => "urls#encode"
  get '/show' => "urls#decode"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
