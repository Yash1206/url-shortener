class UrlsController < ApplicationController
  def create
    @url = Url.find_by(url_params)
    if @url
      render status: :ok, json: { success: true, short_url: @url.short_url }
    else
      @url = Url.new(url_params)
      @url.create_hash
      if @url.save
        render status: :created, json: { success: true, short_url: @url.short_url}
      else
        render status: :unprocessable_entity, json{ success: false, errors: @url.errors.full_messages }
      end
    end
  end

  def show
    @url = Url.find_by(short_url: params[:short_url])

    if @url
      render status: :ok, json: { success: true, full_url: @url.full_url }
    else
      render status: :not_found, json: { success: false, error: "Not found" }
    end
  end

  private

  def url_params
    params.require(:url).permit(:full_url)
  end
  
end
