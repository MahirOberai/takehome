class CreateGifs < ActiveRecord::Migration[6.1]
  def change
    create_table :gifs do |t|
      t.string :title
      t.string :url
      t.boolean :is_selected

      t.timestamps
    end
  end
end
