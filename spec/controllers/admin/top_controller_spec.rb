require 'rails_helper'

describe Admin::TopController, 'ログイン後' do
  let(:administrator) { create(:administrator) }

  before do
    session[:administrator_id] = administrator.id
    session[:last_access_time] = 1.second.ago
  end

  describe '#index' do
    example '通常はstaff/top/dashboardを表示' do
      get :index
      expect(response).to render_template('admin/top/dashboard')
    end
  end
end
