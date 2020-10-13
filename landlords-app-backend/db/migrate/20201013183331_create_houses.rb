class CreateHouses < ActiveRecord::Migration[6.0]
  def change
    create_table :houses do |t|
      t.string :state
      t.string :city
      t.string :address
      t.integer :number_of_tenants, :default => 0

      t.timestamps
    end
  end
end
