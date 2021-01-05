class WordCollectionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :two_letter_word_collection, :three_letter_word_collection, :four_letter_word_collection, :five_letter_word_collection, :six_letter_word_collection, :seven_letter_word_collection, :eight_letter_word_collection, :nine_letter_word_collection
end
