class Edits2 < ActiveRecord::Migration[5.2]
  def change

    remove_column :users, :allotted, :integer
    
    add_column :users, :allotted, :integer, default: 2500
  end
end
