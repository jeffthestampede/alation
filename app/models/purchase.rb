class Purchase < ActiveRecord::Base
  attr_accessible :cashier, :channel, :customer_id, :day, :month, :product, :quantity, :year
end
