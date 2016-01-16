class ProductController < ApplicationController
  def index
    @products = Product.all.select(:name, :id)
    @favorites = Product.all.order(popularity: :desc).limit(3)
  end

  def show
    @product  = Product.find(params[:id])

    @product.popularity += 1
    @product.save
    respond_to do |format|
      format.js { render json: { product: @product, content: render_to_string(:partial => 'description'  ) }}
    end
  end
end
