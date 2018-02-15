class ApplicationController < ActionController::Base
  #not sure about the with: : exception
  protect_from_forgery with: :exception
  protect_from_forgery with: :null_session
end
