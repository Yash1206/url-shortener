class UrlsController < ApplicationController
  def encode
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

  def decode
    @url = Url.find_by_shortened(params[:url][:shortened])
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
