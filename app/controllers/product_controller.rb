class ProductController < ApplicationController
  def index
    @products = Product.all.select(:name, :id)
    @favorites = Product.all.order(popularity: :desc).limit(3)
  end

  def show
    @product =  Rails.cache.fetch(cache_key, expires_in: 1.day) do
      Product.find(params[:id])
    end

    @product.popularity += 1
    @product.save
    respond_to do |format|
      format.js { render json: { product: @product, content: render_to_string(:partial => 'description'  ) }}
    end
  end

  def cache_key
    "product_#{params[:id]}_#{session[:session_id]}"
  end
end
