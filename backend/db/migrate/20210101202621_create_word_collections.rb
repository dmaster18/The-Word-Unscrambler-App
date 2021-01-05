class CreateWordCollections < ActiveRecord::Migration[6.0]
  def change
    create_table :word_collections do |t|
      t.string :name
      t.text :two_letter_word_collection
      t.text :three_letter_word_collection
      t.text :four_letter_word_collection
      t.text :five_letter_word_collection
      t.text :six_letter_word_collection
      t.text :seven_letter_word_collection
      t.text :eight_letter_word_collection
      t.text :nine_letter_word_collection

      t.timestamps
    end
  end
end
