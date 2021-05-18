if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_sake-app-api', domain: 'フロントエンドのドメイン'
else
  Rails.application.config.session_store :cookie_store, key: '_sake-app-api'
end