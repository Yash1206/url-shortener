class Api::V1::CategoriesController < ApplicationController
  before_action :category_list, only: [:index, :update]
  before_action :category_params, only: [:create, :update]
  skip_before_action :verify_authenticity_token

  def index
    @categories = Category.all
    render json: @categories
  end

  def create
    @category = Category.find_by(title: params[:title])
    if @category
      render status: :ok, json: { category: @category, message: "Provided category already exists, please input a new category." }
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
    @category = Category.find_by(title: params[:title])
    if @category.update(category_params)
      @categories = Category.order(updated_at: :desc)
      render status: :ok, json: { category_list: category_list }
    else
      render status: :unprocessable_entity, json: { errors: @category.errors.full_messages }
    end
  end

  def destroy
    @category = Category.find_by(title: params[:title])
    if @category.destroy
      render status: :ok, json: { notice: "Category destroyed successfully" }
    else
      render status: :unprocessable_entity, json: { errors: @category.errors.full_messages }
    end
  end

  private

  def category_list
    Category.order(updated_at: :desc)
  end

  def category_params
    params.require(:category).permit(:title)
  end
end
