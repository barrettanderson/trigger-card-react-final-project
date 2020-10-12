class WarningSignsController < ApplicationController
  before_action :set_warning_sign, only: [:show, :update, :destroy]

  # GET /warning_signs
  def index
    @warning_signs = WarningSign.all

    render json: @warning_signs
  end

  # GET /warning_signs/1
  def show
    render json: @warning_sign
  end

  # POST /warning_signs
  def create
    @warning_sign = WarningSign.new(warning_sign_params)

    if @warning_sign.save
      render json: @warning_sign, status: :created, location: @warning_sign
    else
      render json: @warning_sign.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /warning_signs/1
  def update
    if @warning_sign.update(warning_sign_params)
      render json: @warning_sign
    else
      render json: @warning_sign.errors, status: :unprocessable_entity
    end
  end

  # DELETE /warning_signs/1
  def destroy
    @warning_sign.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_warning_sign
      @warning_sign = WarningSign.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def warning_sign_params
      params.require(:warning_sign).permit(:name, :description)
    end
end
