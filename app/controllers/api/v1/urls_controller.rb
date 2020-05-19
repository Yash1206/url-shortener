class Api::V1::UrlsController < ApplicationController
  before_action :fetch_urls, only: [:index, :update]
  skip_before_action :verify_authenticity_token

  def index
    @urls = Url.order(updated_at: :desc)
    render json: fetch_urls
  end

  def create
    @url = Url.find_by(url_params)
    if @url
      render status: :ok, json: { shortened: @url.shortened }
    else
      @url = Url.create(url_params)
      if @url.save
        render status: :ok, json: { shortened: @url.shortened }
      else
        render status: :unprocessable_entity, json: { errors: "Please input a valid url" }
      end
    end
  end

  def show
    @url = Url.find_by_shortened(params[:shortened])
    if @url
      render status: :ok, json: { original: @url.original }
    else
      render status: :not_found, json: { error: "Not found" }
    end
  end

  def update
    @url = Url.find_by(shortened: params[:shortened])
    if @url.update(url_params)
      render status: :ok, json: { list: fetch_urls }
    end
  end

  private

  def url_params
    params.require(:url).permit(:original, :shortened, :pinned)
  end

  def fetch_urls
    @urls = Url.order(pinned: :desc, updated_at: :desc)
  end

end
