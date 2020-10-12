require 'test_helper'

class WarningSignsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @warning_sign = warning_signs(:one)
  end

  test "should get index" do
    get warning_signs_url, as: :json
    assert_response :success
  end

  test "should create warning_sign" do
    assert_difference('WarningSign.count') do
      post warning_signs_url, params: { warning_sign: { description: @warning_sign.description, name: @warning_sign.name } }, as: :json
    end

    assert_response 201
  end

  test "should show warning_sign" do
    get warning_sign_url(@warning_sign), as: :json
    assert_response :success
  end

  test "should update warning_sign" do
    patch warning_sign_url(@warning_sign), params: { warning_sign: { description: @warning_sign.description, name: @warning_sign.name } }, as: :json
    assert_response 200
  end

  test "should destroy warning_sign" do
    assert_difference('WarningSign.count', -1) do
      delete warning_sign_url(@warning_sign), as: :json
    end

    assert_response 204
  end
end
