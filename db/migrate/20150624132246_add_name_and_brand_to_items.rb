class AddNameAndBrandToItems < ActiveRecord::Migration
  def change
    add_column :items, :name, :string
    add_column :items, :brand, :string
  end
end
