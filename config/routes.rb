Rails.application.routes.draw do
  get 'records/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "records#index"
  resources :records, only: :index

end
