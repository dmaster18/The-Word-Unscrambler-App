class WordCollectionsController < ApplicationController
  def index
    trainerWords = WordCollection.all
    options = {
      include: []
    }
    render json: WordCollectionSerializer.new(trainerWords, options)
  end
end
