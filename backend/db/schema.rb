# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_06_002001) do

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.integer "score"
    t.integer "rank"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "word_collections", force: :cascade do |t|
    t.string "name"
    t.text "two_letter_word_collection"
    t.text "three_letter_word_collection"
    t.text "four_letter_word_collection"
    t.text "five_letter_word_collection"
    t.text "six_letter_word_collection"
    t.text "seven_letter_word_collection"
    t.text "eight_letter_word_collection"
    t.text "nine_letter_word_collection"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "words", force: :cascade do |t|
    t.string "name"
    t.text "two_letter_words"
    t.text "three_letter_words"
    t.text "four_letter_words"
    t.text "five_letter_words"
    t.text "six_letter_words"
    t.text "seven_letter_words"
    t.text "eight_letter_words"
    t.text "nine_letter_words"
    t.text "all_words"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
