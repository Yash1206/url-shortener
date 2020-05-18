Rails.application.routes.draw do
  root 'urls#index'
  resources :urls
  post '/encode' => "urls#encode"
  get '/decode' => "urls#decode"
end
