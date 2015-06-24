class AddCategoryAndValueToItems < ActiveRecord::Migration
  def change
    add_column :items, :category, :string
    add_column :items, :value, :string
  end
end
