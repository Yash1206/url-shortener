class Api::V1::CategoriesController < ApplicationController
  before_action :get_category_list, only: [:index, :destroy]
  before_action :category_params, only: [:create, :update]
  skip_before_action :verify_authenticity_token

  def index
    render json: get_category_list
  end

  def create
    @category = Category.create(category_params)
    if @category.save
      render status: :ok, json: { category: @category }
    else
      render status: :unprocessable_entity, json: { errors: @category.errors.full_messages }
    end
  end

  def update
    @category = Category.find_by(id: params[:id])
    if @category.update(category_params)
      render status: :ok, json: { category: @category }
    else
      render status: :unprocessable_entity, json: { errors: @category.errors.full_messages }
    end
  end

  def destroy
    @category = Category.find_by(id: params[:id])
    if @category.destroy
      categories = @categories
      render status: :ok, json: { notice: "Category destroyed successfully", category_list: categories }
    else
      render status: :unprocessable_entity, json: { errors: @category.errors.full_messages }
    end
  end

  private

  def get_category_list
    @categories = Category.order(created_at: :desc)
  end

  def category_params
    params.require(:category).permit(:title, :id)
  end
end
