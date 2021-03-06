class ItemsController < ApplicationController
	def index
		@items = Item.all
	end

	def new
		@item = Item.new
	end

	def create 
		@item = Item.create(item_params)

		if @item.save
			redirect_to root_path
		else
			render 'new'
		end
	end

	def show
		@item = Item.find(params[:id])
	end

	private
		def item_params
			params.require(:item).permit(:name, :value, :category,
										 :date_taken, :due_date, :notes)
		end
end
