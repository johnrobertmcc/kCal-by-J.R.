class UpdateKcal < ActiveRecord::Migration[5.2]
  def change

    add_column :calories, :date, :date
  end
end
