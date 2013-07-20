class CreatePurchases < ActiveRecord::Migration
  def change
    create_table :purchases do |t|
      t.string :month
      t.integer :day
      t.integer :year
      t.integer :customer_id
      t.string :product
      t.integer :quantity
      t.integer :channel
      t.integer :cashier

      t.timestamps
    end
  end
end
