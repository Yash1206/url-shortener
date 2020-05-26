class Api::V1::UrlsController < ApplicationController
  before_action :fetch_urls, only: [:index]
  skip_before_action :verify_authenticity_token

  def index
    render json: fetch_urls
  end

  def create
    @url = Url.new(url_params)
    if @url.save
      render status: :ok, json: { shortened: @url.shortened }
    else
      render status: :unprocessable_entity, json: { errors: @url.errors.full_messages }
    end
  end

  def show
    @url = Url.find_by_shortened(params[:shortened])
    if @url
      render status: :ok, json: { original: @url.original }
    else
      render status: :not_found, json: { errors: "Url not found." }
    end
  end

  def update
    @url = Url.find_by(id: params[:id])
    if @url.update(url_params)
      render status: :ok, json: { notice: "Url updated successfully." }
    else
      render status: :unprocessable_entity, json: { errors: @url.errors.full_messages }
    end
  end

  def destroy
    @url = Url.find_by(id: params[:id])
    if @url.destroy
      render status: :ok, json: { notice: "Url deleted successfully." }
    else
      render status: :unprocessable_entity, json: { errors: @url.errors.full_messages}
    end
  end
  private

  def url_params
    params.require(:url).permit(:original, :shortened, :pinned, :category_id)
  end

  def fetch_urls
    @urls = Url.order(pinned: :desc, updated_at: :desc)
  end
end
