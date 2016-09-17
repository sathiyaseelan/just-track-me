class CreateGoals < ActiveRecord::Migration[5.0]
  def change
    create_table :goals do |t|
      t.string :name
      t.integer :priority
      t.integer :target
      t.string :unit

      t.timestamps
    end
  end
end
