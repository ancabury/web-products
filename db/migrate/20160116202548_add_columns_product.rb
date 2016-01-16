class AddColumnsProduct < ActiveRecord::Migration
  def change
    add_column :products, :popularity, :integer, default: 0
  end
end
