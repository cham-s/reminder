class AddDateTakenAndDueDateToItems < ActiveRecord::Migration
  def change
    add_column :items, :date_taken, :date
    add_column :items, :due_date, :date
  end
end
