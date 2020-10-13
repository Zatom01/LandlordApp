class CreateTenants < ActiveRecord::Migration[6.0]
  def change
    create_table :tenants do |t|
      t.string :name
      t.string :occupation
      t.boolean :rent_paid, :default => false

      t.timestamps
    end
  end
end
