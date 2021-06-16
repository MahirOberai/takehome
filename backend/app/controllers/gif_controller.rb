class GifController < ApplicationController
  def index
    @gifs = Gif.all
    render json: @gifs
  end

  def select_gif_title
    @gif = Gif.find params[:title] if params[:id].present?
    render json: @gif
  end

  def show_user_gifs
    id = @current_user
    @gifs = User.find(params[:id])
  end

end
