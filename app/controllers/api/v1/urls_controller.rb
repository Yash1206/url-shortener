class Api::V1::UrlsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @urls = Url.order(updated_at: :desc)
    render json: @urls
  end

  def create
    @url = Url.find_by(url_params)
    if @url
      render status: :ok, json: { shortened: @url.shortened }
    else
      @url = Url.new(url_params)
      if @url.save
        render status: :ok, json: { shortened: @url.shortened }
      else
        render status: :unprocessable_entity, json: { errors: "Please input a valid url" }
      end
    end
  end

  def show
    @url = Url.find_by_shortened(params[:short_url])
    if @url
      render status: :ok, json: { original: @url.original }
    else
      render status: :not_found, json: { error: "Not found" }
    end
  end

  private

  def url_params
    params.require(:url).permit(:original)
  end

end
