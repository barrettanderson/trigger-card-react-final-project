require 'test_helper'

class CopingSkillsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @coping_skill = coping_skills(:one)
  end

  test "should get index" do
    get coping_skills_url, as: :json
    assert_response :success
  end

  test "should create coping_skill" do
    assert_difference('CopingSkill.count') do
      post coping_skills_url, params: { coping_skill: { description: @coping_skill.description, name: @coping_skill.name } }, as: :json
    end

    assert_response 201
  end

  test "should show coping_skill" do
    get coping_skill_url(@coping_skill), as: :json
    assert_response :success
  end

  test "should update coping_skill" do
    patch coping_skill_url(@coping_skill), params: { coping_skill: { description: @coping_skill.description, name: @coping_skill.name } }, as: :json
    assert_response 200
  end

  test "should destroy coping_skill" do
    assert_difference('CopingSkill.count', -1) do
      delete coping_skill_url(@coping_skill), as: :json
    end

    assert_response 204
  end
end
