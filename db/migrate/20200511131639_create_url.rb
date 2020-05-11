class CreateUrl < ActiveRecord::Migration[6.0]
  def change
    create_table :urls do |t|
      t.string :full, null: false
      t.string :shortened, null: false
    end
  end
end
