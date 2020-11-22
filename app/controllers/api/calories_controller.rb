class Api::CaloriesController < ApplicationController


        skip_before_action :verify_authenticity_token
    def index

        @calories = current_user.calories
        render :index
    end

    def show
        @calory = Calory.find(params[:id])
        render :show
    end

    def destroy

        @calory = Calory.find(params[:id])
        if !@calory.destroy
            render json: [@calory.errors.full_messages], status: 422

        else
            render :destroy

        end
        
    end

   
    def create
        @calory = Calory.new(calorie_params)
        debugger

        if @calory.save
            debugger
            render 'api/calories/show'
        else 
            debugger 
            render json: [@calory.errors.full_messages], status: 422
        end
        
    end

    def update
  
        @calory = Calory.find(params[:id])

        if @calory.update(calorie_params)

            render "api/calories/show"
        
        else

            render json: [@calory.errors.full_messages], status: 422

        end
    
    end

    private

    def calorie_params
        params.require(:calory).permit(:count, :date, :user_id, :meal)
    end


end