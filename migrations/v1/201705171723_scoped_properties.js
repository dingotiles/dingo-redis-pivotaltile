exports.migrate = function(input) {
  var properties = input.properties;

  properties['.broker.credentials.identity'] = properties['.properties.broker_username.value'];
  properties['.broker.credentials.password'] = properties['.properties.broker_password.value'];
  properties['.broker.cookie_secret'] = properties['.properties.broker_cookie_secret.value'];
  properties['.docker.tls'] = properties['.properties.docker_tls'];
  properties['.docker.broker_redis_secret'] = properties['.properties.docker_broker_redis_secret'];

  return input;
};
