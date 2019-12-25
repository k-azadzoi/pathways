class Api::V1::UsersController < ApplicationController
    protect_from_forgery unless: -> { request.format.json? }
    def index
        users = User.all
        users.reverse
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user
    end
end
  