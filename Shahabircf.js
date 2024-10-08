{
  "remarks": "c2 h3_quic splithttp CDN vless",
  "log": {
    "access": "",
    "error": "",
    "loglevel": "warning"
  },
  "inbounds": [
    {
      "tag": "socks",
      "port": 10808,
      "listen": "127.0.0.1",
      "protocol": "socks",
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls"
        ],
        "routeOnly": false
      },
      "settings": {
        "auth": "noauth",
        "udp": true,
        "allowTransparent": false
      }
    },
    {
      "tag": "http",
      "port": 10809,
      "listen": "127.0.0.1",
      "protocol": "http",
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls"
        ],
        "routeOnly": false
      },
      "settings": {
        "auth": "noauth",
        "udp": true,
        "allowTransparent": false
      }
    }
  ],
  "outbounds": [
    {
      "tag": "c2 h3_quic splithttp CDN vless",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "tgju.org",
            "port": 443,
            "users": [
              {
                "id": "dfbbc8de-8a4f-407d-8069-6de38d83c4e1",
                "encryption": "none",
                "flow": "",
                "level": 8
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "security": "tls",
        "tlsSettings": {
          "serverName": "hdfy4c2serverpersia.freeairlaines.com",
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h3"
          ]
        },
        "network": "splithttp",
        "splithttpSettings": {
          "path": "/Mr6wzC2rTQSeahRt",
          "host": "hdfy4c2serverpersia.freeairlaines.com",
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
          }
        }
      }
    },
    {
      "tag": "fragment",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "AsIs"
      },
      "streamSettings": {
        "sockopt": {
          "tcpNoDelay": true,
          "tcpKeepAliveIdle": 100
        }
      }
    },
    {
      "tag": "direct",
      "protocol": "freedom",
      "settings": {}
    },
    {
      "tag": "block",
      "protocol": "blackhole",
      "settings": {
        "response": {
          "type": "http"
        }
      }
    }
  ],
  "routing": {
    "domainStrategy": "AsIs",
    "rules": [
      {
        "type": "field",
        "inboundTag": [
          "api"
        ],
        "outboundTag": "api",
        "enabled": true
      },
      {
        "id": "5465425548310166497",
        "type": "field",
        "outboundTag": "direct",
        "domain": [
          "domain:ir",
          "geosite:cn"
        ],
        "enabled": true
      },
      {
        "id": "5425034033205580637",
        "type": "field",
        "outboundTag": "direct",
        "ip": [
          "geoip:private",
          "geoip:cn",
          "geoip:ir"
        ],
        "enabled": true
      },
      {
        "id": "5627785659655799759",
        "type": "field",
        "port": "0-65535",
        "outboundTag": "proxy",
        "enabled": true
      }
    ]
  }
}
