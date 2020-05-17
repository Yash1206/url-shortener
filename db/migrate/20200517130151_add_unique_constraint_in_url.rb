class AddUniqueConstraintInUrl < ActiveRecord::Migration[6.0]
  def change
    add_index :urls, [:original, :shortened], :unique => true
  end
end
