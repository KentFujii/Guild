require 'rails_helper'

describe 'ルーティング' do
  example '職員トップページ' do
    expect(get: 'http://guild.example.com').to route_to(
      host: 'guild.example.com',
      controller: 'staff/top',
      action: 'index'
    )
  end

  example 'アドミンメンバーログインフォーム' do
    expect(get: 'http://guild.example.com/admin/login').to route_to(
      host: 'guild.example.com',
      controller: 'admin/sessions',
      action: 'new'
    )
  end

  example 'ホスト名が対象外ならerrors/not_foundへ' do
    expect(get: 'http://foo.example.jp').to route_to(
      controller: 'errors',
      action: 'not_found'
    )
  end

  example '存在しないパスならerrors/not_foundへ' do
    expect(get: 'http://example.com/xyz').to route_to(
      controller: 'errors',
      action: 'not_found',
      anything: 'xyz'
    )
  end
end
