class PlayersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    players = Player.all
    options = {
      include: []
    }
    render json: PlayerSerializer.new(players, options)
  end

  def create
    Player.create(name: params[:player][:name], score: params[:player][:score])
  end

end
