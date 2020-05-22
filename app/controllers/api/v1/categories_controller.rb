class Api::V1::CategoriesController < ApplicationController
  before_action :category_list, only: [:index]

  def index
    render json: category_list
  end

  def create

  end

  def update

  end

  def edit

  end

  def destroy

  end

  private

  def category_list
    Category.order(updated_at: :desc)
  end
end
