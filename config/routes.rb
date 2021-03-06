Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 root to: 'static_pages#root'
      namespace :api, defaults: { format: :json } do
      
      resources :users, only: [:create, :update] do
        resources :calories, only: [:create, :update, :destroy, :index, :show]
      end
      resource :session, only: [:destroy, :create]

    end
end
