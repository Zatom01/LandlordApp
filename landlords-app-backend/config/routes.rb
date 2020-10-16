Rails.application.routes.draw do

  resources :users do
    resources :houses do
      resources :tenants
    end
  end
end
