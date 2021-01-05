class WordsController < ApplicationController
  def index
    words = Word.limit(params[:limit] || 15)
    options = {
      include: []
    }
    render json: WordSerializer.new(words, options)
  end

  def show
    word = Word.find_by(id: params[:id])
    options = {
      include: []
    }
    render json: WordSerializer.new(word, options)
  end
end
