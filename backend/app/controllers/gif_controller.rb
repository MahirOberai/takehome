class GifController < ApplicationController
  def index
    @gifs = Gif.all
    render json: @gifs
  end

  def save
    @gif = Gif.find params[:id] if params[:id].present?
    @gif.update_attribute(:is_selected, true)
    render json: @gif
  end

  def show_saved
    @gifs = Gif.where("is_selected = true", params[:is_selected])
    render json: @gifs
  end

  def destroy
    @gif = Gif.find params[:id] if params[:id].present?
    @gif.destroy
  end

  def show_user_gifs
    id = User.current_user
    
    render json: @gifs
  end

end
