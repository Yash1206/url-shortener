class UrlsController < ApplicationController
  def encode
    @url = Url.find_by(url_params)
    if @url
      render status: :ok, json: { short_url: @url.short_url }
    else
      @url = Url.new(url_params)
      if @url.save
        render status: :ok, json: { short_url: @url.short_url }
      else
        render status: :unprocessable_entity, json: { errors: "Please input a valid url" }
      end
    end
  end

  def decode
    @url = Url.find_by_short_url(params[:url][:short_url])
    if @url
      render status: :ok, json: { full_url: @url.full_url }
    else
      render status: :not_found, json: { error: "Not found" }
    end
  end

  private

  def url_params
    params.require(:url).permit(:full_url)
  end

end
