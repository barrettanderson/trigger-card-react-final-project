require 'test_helper'

class TriggersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @trigger = triggers(:one)
  end

  test "should get index" do
    get triggers_url, as: :json
    assert_response :success
  end

  test "should create trigger" do
    assert_difference('Trigger.count') do
      post triggers_url, params: { trigger: { description: @trigger.description, name: @trigger.name } }, as: :json
    end

    assert_response 201
  end

  test "should show trigger" do
    get trigger_url(@trigger), as: :json
    assert_response :success
  end

  test "should update trigger" do
    patch trigger_url(@trigger), params: { trigger: { description: @trigger.description, name: @trigger.name } }, as: :json
    assert_response 200
  end

  test "should destroy trigger" do
    assert_difference('Trigger.count', -1) do
      delete trigger_url(@trigger), as: :json
    end

    assert_response 204
  end
end
