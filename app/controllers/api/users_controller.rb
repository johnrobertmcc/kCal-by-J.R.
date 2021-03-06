class Api::UsersController < ApplicationController

        skip_before_action :verify_authenticity_token
    

    def create

        @user = User.new(user_params)
    
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: [@user.errors.full_messages], status: 422    
        end
        
    end

       def update
  
        @user = User.find(params[:id])

        if @user.update(user_params)

            render "api/users/show"
        
        else

            render json: [@user.errors.full_messages], status: 422

        end
    
    end

    private

    def user_params
        params.require(:user).permit(:email, :fname, :lname, :age, :weight, :height, :password)
    end

    def user_edit_params
        params.require(:user).permit(:weight)
    end
end
