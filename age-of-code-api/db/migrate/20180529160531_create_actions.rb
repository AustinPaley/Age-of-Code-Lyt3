class CreateActions < ActiveRecord::Migration[5.2]
  def change
    create_table :actions do |t|
      t.string :name
      t.integer :value
      t.integer :cooldown
      t.string :target
      t.integer :price

      t.timestamps
    end
  end
end
