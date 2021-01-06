class PlayersController < ApplicationController
  def index
    players = Player.all
    options = {
      include: []
    }
    render json: PlayerSerializer.new(players, options)
  end

end
