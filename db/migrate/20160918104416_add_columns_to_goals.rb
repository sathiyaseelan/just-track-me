class AddColumnsToGoals < ActiveRecord::Migration[5.0]
  def change
    add_column :goals, :remaining, :integer, default: 0
    add_column :goals, :default, :boolean, default: :false
  end
end
