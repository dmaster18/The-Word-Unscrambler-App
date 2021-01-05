class WordSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :all_words, :two_letter_words, :three_letter_words, :four_letter_words, :five_letter_words, :six_letter_words, :seven_letter_words, :eight_letter_words, :nine_letter_words
end
