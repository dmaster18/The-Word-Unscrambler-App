class WordCollection < ApplicationRecord

#Ensures generate_letter_word_collections runs before instance of it is saved
  before_save :generate_letter_word_collections

  serialize :two_letter_word_collection, Array
  serialize :three_letter_word_collection, Array
  serialize :four_letter_word_collection, Array
  serialize :five_letter_word_collection, Array
  serialize :six_letter_word_collection, Array
  serialize :seven_letter_word_collection, Array
  serialize :eight_letter_word_collection, Array
  serialize :nine_letter_word_collection, Array

#Adds all two- through nine-letter words to collections from all letter groupings
  def generate_letter_word_collections
    Word.all.each {|word|
      self.two_letter_word_collection << word.two_letter_words
      self.three_letter_word_collection << word.three_letter_words
      self.four_letter_word_collection << word.four_letter_words
      self.five_letter_word_collection << word.five_letter_words
      self.six_letter_word_collection << word.six_letter_words
      self.seven_letter_word_collection << word.seven_letter_words
      self.eight_letter_word_collection << word.eight_letter_words
      self.nine_letter_word_collection << word.nine_letter_words
    }
    self.two_letter_word_collection = self.two_letter_word_collection.flatten.sort.uniq
    self.three_letter_word_collection = self.three_letter_word_collection.flatten.sort.uniq
    self.four_letter_word_collection = self.four_letter_word_collection.flatten.sort.uniq
    self.five_letter_word_collection = self.five_letter_word_collection.flatten.sort.uniq
    self.six_letter_word_collection = self.six_letter_word_collection.flatten.sort.uniq
    self.seven_letter_word_collection = self.seven_letter_word_collection.flatten.sort.uniq
    self.eight_letter_word_collection = self.eight_letter_word_collection.flatten.sort.uniq
    self.nine_letter_word_collection = self.nine_letter_word_collection.flatten.sort.uniq
    self
  end

end
