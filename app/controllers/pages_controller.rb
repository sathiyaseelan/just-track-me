class PagesController < ApplicationController

  skip_before_action :authenticate_user!, only: [:index]
  def index
    if user_signed_in?
      @goal = current_user.default_goal
    end
  end
end
