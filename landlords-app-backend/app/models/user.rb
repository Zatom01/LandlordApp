class User < ApplicationRecord
    has_many :houses, dependent: :destroy
    has_many :tenants, through: :houses


end
