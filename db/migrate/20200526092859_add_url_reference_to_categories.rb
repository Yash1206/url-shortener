class AddUrlReferenceToCategories < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :urls, :categories, column: :category_id
  end
end
