class Api::CaloriesController < ApplicationController

    def index
        @controller = current_user.calories
        render :index
    end

    def show
        @calorie = Calorie.find(params[:id])
        render :show
    end

    def destroy

        @calorie = Calorie.find(params[:id])
        if !@calorie.destroy
            render json: [@calorie.errors.full_messages], status: 422

        else
            render :destroy

        end
        
    end

   
    def create
        @calorie = Calorie.new(calorie_params)

        if @calorie.save
            render 'api/calories/show'
        else  
            render json: [@calorie.errors.full_messages], status: 422
        end
        
    end

    def update
  
        @calorie = Calorie.find(params[:id])

        if @calorie.update(calorie_params)

            render "api/calories/show"
        
        else

            render json: [@calorie.errors.full_messages], status: 422

        end
    
    end

    private

    def calorie_params
        params.require(:calorie).permit(:user_id, :count, :date)
    end


end