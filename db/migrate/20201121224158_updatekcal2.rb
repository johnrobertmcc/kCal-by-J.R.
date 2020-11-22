class Updatekcal2 < ActiveRecord::Migration[5.2]
  def change
    add_column :calories, :meal, :string
  end
end
