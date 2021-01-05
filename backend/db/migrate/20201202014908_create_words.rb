class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :name
      t.text :two_letter_words
      t.text :three_letter_words
      t.text :four_letter_words
      t.text :five_letter_words
      t.text :six_letter_words
      t.text :seven_letter_words
      t.text :eight_letter_words
      t.text :nine_letter_words
      t.text :all_words
      t.timestamps
    end
  end
end
