class Api::V1::CategoriesController < ApplicationController
  before_action :category_list, only: [:index]
  before_action :category_params, only: [:create]

  def index
    render json: category_list
  end

  def create
    @category = Category.find_by(category_params)
    if @category
      render status: :unprocessable_entity, json: { errors: "Provided category already exists, please input a new category." }
    else
      @category = Category.create(category_params)
      if @category.save
        render status: :ok, json: { category: @category }
      else
        render status: :unprocessable_entity, json: { errors: @category.errors.full_messages }
      end
    end
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

  def category_params
    params.require(:category).permit(:title)
  end
end
