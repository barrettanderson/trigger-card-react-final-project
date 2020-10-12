class CopingSkillsController < ApplicationController
  before_action :set_coping_skill, only: [:show, :update, :destroy]

  # GET /coping_skills
  def index
    @coping_skills = CopingSkill.all

    render json: @coping_skills
  end

  # GET /coping_skills/1
  def show
    render json: @coping_skill
  end

  # POST /coping_skills
  def create
    @coping_skill = CopingSkill.new(coping_skill_params)

    if @coping_skill.save
      render json: @coping_skill, status: :created, location: @coping_skill
    else
      render json: @coping_skill.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /coping_skills/1
  def update
    if @coping_skill.update(coping_skill_params)
      render json: @coping_skill
    else
      render json: @coping_skill.errors, status: :unprocessable_entity
    end
  end

  # DELETE /coping_skills/1
  def destroy
    @coping_skill.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_coping_skill
      @coping_skill = CopingSkill.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def coping_skill_params
      params.require(:coping_skill).permit(:name, :description)
    end
end
