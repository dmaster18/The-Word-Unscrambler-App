class Word < ApplicationRecord

#Before saving words, execute all these instance methods
  before_save :all_words, :two_letter_words, :three_letter_words, :four_letter_words, :five_letter_words, :six_letter_words, :seven_letter_words, :eight_letter_words, :nine_letter_words, :sanitize_all_words

#For ActiveRecord, faciliate conversion of Text type to Array type
  serialize :two_letter_words, Array
  serialize :three_letter_words, Array
  serialize :four_letter_words, Array
  serialize :five_letter_words, Array
  serialize :six_letter_words, Array
  serialize :seven_letter_words, Array
  serialize :eight_letter_words, Array
  serialize :nine_letter_words, Array

#Instance method that removes blank words and capitalizes all characts of words stored in the array
  def sanitize(word_array)
    word_array.delete_if{|word| word == "" || word == nil}
    capitalized_word_array = word_array.map{|word| word.upcase}
    capitalized_word_array
  end

#Sanitizes all words and adds all words to class variables
  def sanitize_all_words
    self.two_letter_words = sanitize(self.two_letter_words)
    self.three_letter_words = sanitize(self.three_letter_words)
    self.four_letter_words = sanitize(self.four_letter_words)
    self.five_letter_words = sanitize(self.five_letter_words)
    self.six_letter_words = sanitize(self.six_letter_words)
    self.seven_letter_words = sanitize(self.seven_letter_words)
    self.eight_letter_words = sanitize(self.eight_letter_words)
    self.nine_letter_words = sanitize(self.nine_letter_words)
    self
  end

#Adds all two-letter through nine-letter words to self.all_words array
  def all_words
    all_words = []
    all_words << two_letter_words
    all_words << three_letter_words
    all_words << four_letter_words
    all_words << five_letter_words
    all_words << six_letter_words
    all_words << seven_letter_words
    all_words << eight_letter_words
    all_words << nine_letter_words
    self.all_words = all_words.flatten
  end
end
