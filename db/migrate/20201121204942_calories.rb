class Calories < ActiveRecord::Migration[5.2]
    def change
    create_table :calories do |t|
      t.integer :user_id, null: false
      t.integer :count, null: false

      t.timestamps

    end
      add_column :users, :allotted, :integer
    end
end
