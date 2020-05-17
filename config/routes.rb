Rails.application.routes.draw do
  resources :urls
  post '/encode' => "urls#encode"
  get '/decode' => "urls#decode"
end
