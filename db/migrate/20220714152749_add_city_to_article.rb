class AddCityToArticle < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :city, :string
  end
end
