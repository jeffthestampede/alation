require 'test_helper'

class PurchasesControllerTest < ActionController::TestCase
  setup do
    @purchase = purchases(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:purchases)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create purchase" do
    assert_difference('Purchase.count') do
      post :create, purchase: { cashier: @purchase.cashier, channel: @purchase.channel, customer_id: @purchase.customer_id, day: @purchase.day, month: @purchase.month, product: @purchase.product, quantity: @purchase.quantity, year: @purchase.year }
    end

    assert_redirected_to purchase_path(assigns(:purchase))
  end

  test "should show purchase" do
    get :show, id: @purchase
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @purchase
    assert_response :success
  end

  test "should update purchase" do
    put :update, id: @purchase, purchase: { cashier: @purchase.cashier, channel: @purchase.channel, customer_id: @purchase.customer_id, day: @purchase.day, month: @purchase.month, product: @purchase.product, quantity: @purchase.quantity, year: @purchase.year }
    assert_redirected_to purchase_path(assigns(:purchase))
  end

  test "should destroy purchase" do
    assert_difference('Purchase.count', -1) do
      delete :destroy, id: @purchase
    end

    assert_redirected_to purchases_path
  end
end
