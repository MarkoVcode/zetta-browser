angular.module('zetta').controller('OverviewCtrl', [
  '$scope', '$state', '$http', 'navigator', 'zettaShared', function($scope, $state, $http, navigator, zettaShared) {
  $scope.pinned = [];
  $scope.servers = zettaShared.servers = [];
  $scope.muted = [];

  $scope.execute = function(action, cb) {
    navigator.execute(action).then(function(result) {
      if (result.noop) {
        return;
      }
    
      var data = result.data;
      var device = zettaShared.buildDeviceFromData(data);
      var selfUrl;
      var serverName;

      device.links.forEach(function(link) {
        if (link.rel.indexOf('up') !== -1) {
          serverName = link.title;
        }
        if (link.rel.indexOf('self') !== -1) {
          selfUrl = link.href;
        }
      });

      var server;

      zettaShared.servers.forEach(function(s) {
        if (s.name === serverName) {
          server = s;
        }
      });

      if (server) {
        for(var i = 0; i < server.devices.length; i++) {
          var d = server.devices[i];
          if (d.href === selfUrl) {
            if (device.actions && device.actions.length) {
              device.actions = device.actions.map(function(action) {
                action.execute = function() {
                  $scope.execute(action);
                };
                return action;
              });
            }

            server.devices[i].actions = device.actions;
            if (cb) cb();
          }
        }
      }
    });
  };

  $scope.init = function() {
    $scope.servers = zettaShared.servers = [];
    zettaShared.root = $state.params.url;
    zettaShared.breadcrumbs = [ { title: 'root', href: $state.params.url }];
    $http.get($state.params.url).then(function(response) {
      var data = response.data;
      if (typeof data === 'string') {
        data = JSON.parse(data);
      }

      var serverLinks = data.links.filter(function(link) {
        return link.rel.indexOf('http://rels.zettajs.io/server') !== -1;
      });

      if (serverLinks.length) {
        var server = serverLinks[0];
        zettaShared.servers.push({
          name: server.title,
          type: 'server',
          href: server.href
        });
      }

      var peerLinks = data.links.filter(function(link) {
        return link.rel.indexOf('http://rels.zettajs.io/peer') !== -1;
      });

      peerLinks.forEach(function(peer) {
        zettaShared.servers.push({
          name: peer.title,
          type: 'peer',
          href: peer.href
        });
      });

      $scope.crawl();
    });
  };

  $scope.crawl = function() {
    zettaShared.servers.forEach(function(server) {
      $http.get(server.href).then(function(response) {
        var data = response.data;
        if (typeof data === 'string') {
          data = JSON.parse(data);
        }

        data.links.forEach(function(link) {
          if (link.rel.indexOf('monitor') !== -1) {
            server.monitorHref = link.href;
            server.monitorSocket = new WebSocket(link.href);
          }
        });
        
        if (!data.entities) {
          return;
        }

        server.devices = [];

        var devices = data.entities.filter(function(entity) {
          return entity.class.indexOf('device') !== -1;
        });

        devices.forEach(function(device) {
          var selfLink;
          device.links.forEach(function(link) {
            if (link.rel.indexOf('self') !== -1) {
              selfLink = link;
            }
          });

          if (!selfLink) {
            return;
          }

          $http.get(selfLink.href).then(function(response) {
            var deviceData = response.data;

            var device = zettaShared.buildDeviceFromData(deviceData);

            if (device.actions && device.actions.length) {
              device.actions = device.actions.map(function(action) {
                action.execute = function(cb) {
                  $scope.execute(action, cb);
                };
                return action;
              });
            }

            server.devices.push(device);

            zettaShared.wireUpStreams(device, function() {
              $scope.$apply();
            });
          });
        });
      });
    });
  };

  $scope.resolve = function(href) {
    navigator.transitionTo(href, { url: href });
  };
}]);