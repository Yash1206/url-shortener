class ChangeColumnNameInUrl < ActiveRecord::Migration[6.0]
  def change
    rename_column :urls, :full_url, :original
    rename_column :urls, :short_url, :shortened
  end
end
