Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :urls, only: [:create, :show], param: :short
    end
  end
end
