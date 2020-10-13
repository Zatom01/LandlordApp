class AddHouseToTenants < ActiveRecord::Migration[6.0]
  def change
    add_reference :tenants, :house, foreign_key: true
  end
end
