class AddDoneColumnToGoals < ActiveRecord::Migration[5.0]
  def change
    add_column :goals, :done, :boolean, default: :false
    add_column :goals, :expected_completion_day, :date # Expected Completion Day
  end
end
