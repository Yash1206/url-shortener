class CreateCategory < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :title, null: false, index: {unique: true}

      t.timestamps
    end
    add_reference :urls, :category
  end
end
