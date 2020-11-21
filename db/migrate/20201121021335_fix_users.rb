class FixUsers < ActiveRecord::Migration[5.2]
  def change


    remove_column :users, :height, :string
    remove_column :users, :weight, :string
    remove_column :users, :age, :string
    
    add_column :users, :height, :integer
    add_column :users, :weight, :integer
    add_column :users, :age, :integer
  end
end
