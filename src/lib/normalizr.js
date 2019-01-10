var { normalize, schema, denormalize } = require('normalizr');

const underwrite = new schema.Entity(
    'underWrites',
    {},
    {
        idAttribute: value => value.id,
    },
);
const ivProduct = new schema.Entity(
    'ivProducts',
    {},
    {
        idAttribute: value => value.productId,
    },
);
const mainTask = new schema.Entity(
    'mainTasks',
    {
        ivProducts: [ivProduct],
        underwrite: underwrite,
    },
    {
        idAttribute: value => value.mainTaskId,
    },
);
var originalData = '';
var normalizedData = '';
console.log(originalData, normalizedData);
originalData = [
    {
        mainTaskId: 100015570,
        name: '测试',
        idType: '01',
        idNum: '2114021XXXXXXXX12',
        ivProducts: [
            {
                productId: 106255,
                productName: 'test1',
                productCode: '23',
            },
        ],
        underwrite: {
            id: 125254,
            mainTaskId: 100015570,
        },
    },
    {
        mainTaskId: 100015560,
        name: '高老庄',
        idType: '01',
        idNum: '211402199XXXXXXX12',
        ivProducts: [
            {
                productId: 107170,
                productName: 'test2',
                productCode: '26',
            },
            {
                productId: 105382,
                productName: 'test4',
                productCode: '24',
            },
            {
                productId: 105383,
                productName: 'test3',
                productCode: '25',
            },
        ],
        underwrite: {
            id: 125199,
            mainTaskId: 100015560,
        },
    },
    {
        mainTaskId: 100015540,
        name: '测试666',
        idType: '01',
        idNum: '211XXXXXXX012',
        ivProducts: [
            {
                productId: 100382,
                productName: 'test4',
                productCode: '24',
            },
            {
                productId: 100383,
                productName: 'test3',
                productCode: '25',
            },
            {
                productId: 100170,
                productName: 'test2',
                productCode: '26',
            },
        ],
        underwrite: {
            id: 124179,
            mainTaskId: 100015540,
        },
    },
];
normalizedData = normalize(originalData, [mainTask]);

const fev = [{
    "id": "1692841739385180160",
    "name": "测试房间了",
    "icon": "https://six-1257051386.picgz.myqcloud.com/2082d0a234eb4fee991fb9afcdf2cf79..jpeg",
    "splash": "",
    "owner": 0,
    "owner_id": "7CD0D08EA8380F034F38B25EA3667B8B",
    "permissions": 0,
    "region": "",
    "afk_channel_id": "",
    "afk_timeout": 0,
    "embed_enabled": 0,
    "embed_channel_id": "",
    "verification_level": 0,
    "default_message_notifications": 0,
    "explicit_content_filter": 0,
    "features": "",
    "sign": "",
    "tags": "",
    "application_id": "",
    "mfa_level": 0,
    "system_channel_id": "1692841742161809408",
    "widget_channel_id": "",
    "widget_enabled": 0,
    "joined_at": "2019-01-10 10:26:42",
    "unavailable": 0,
    "large": 0,
    "member_count": 19,
    "join_type": 0,
    "notice": "",
    "channel_id_list": ["1692841742161809408"],
    "manage_guild": false,
    "manage_channel": false,
    "unfold": false,
    "group_channels": [{
      "group_id": "-1",
      "group_name": "未分类",
      "channels": []
    }, {
      "group_id": "1692841739389374464",
      "group_name": "默认分组",
      "channels": [{
        "id": "1692841742161809408",
        "type": 0,
        "name": "默认频道",
        "topic": "",
        "nsfw": 0,
        "last_message_id": "",
        "bitrate": 0,
        "user_limit": 0,
        "icon": "",
        "owner_id": "7CD0D08EA8380F034F38B25EA3667B8B",
        "parent_id": "1692841739385180160",
        "application_id": "",
        "last_pin_timestamp": "2019-01-04 19:08:24",
        "group_id": "1692841739389374464",
        "cloud_live_roomid": 405,
        "allowed_messages": 1,
        "how_long_allowed_messages": 0,
        "password": "",
        "position": 1692841744670003200,
        "new_msg": 0
      }]
    }],
    "new_msg": 0
  }, {
    "id": "1692840314492030976",
    "name": "大眼兔兔",
    "icon": "https://six-1257051386.picgz.myqcloud.com/2f7d5574066442a8873f110b36ab2609..gif",
    "splash": "",
    "owner": 0,
    "owner_id": "6E2CC86B41908615D88DFFC864BC6058",
    "permissions": 0,
    "region": "",
    "afk_channel_id": "",
    "afk_timeout": 0,
    "embed_enabled": 0,
    "embed_channel_id": "",
    "verification_level": 0,
    "default_message_notifications": 0,
    "explicit_content_filter": 0,
    "features": "",
    "sign": "",
    "tags": "",
    "application_id": "",
    "mfa_level": 0,
    "system_channel_id": "1692840317910388736",
    "widget_channel_id": "",
    "widget_enabled": 0,
    "joined_at": "2019-01-10 10:42:25",
    "unavailable": 0,
    "large": 0,
    "member_count": 28,
    "join_type": 0,
    "notice": "",
    "channel_id_list": ["1692840317910388736"],
    "manage_guild": false,
    "manage_channel": false,
    "unfold": false,
    "group_channels": [{
      "group_id": "-1",
      "group_name": "未分类",
       "channels": []
    }, {
      "group_id": "1692840314496225280",
      "group_name": "默认分组",
      "channels": [{
        "id": "1692840317910388736",
        "type": 0,
        "name": "默认频道",
        "topic": "",
        "nsfw": 0,
        "last_message_id": "",
        "bitrate": 0,
        "user_limit": 0,
        "icon": "",
        "owner_id": "6E2CC86B41908615D88DFFC864BC6058",
        "parent_id": "1692840314492030976",
        "application_id": "",
        "last_pin_timestamp": "2019-01-09 13:01:58",
        "group_id": "1692840314496225280",
        "cloud_live_roomid": 426,
        "allowed_messages": 1,
        "how_long_allowed_messages": 0,
        "password": "",
        "position": 1692840320187895800,
        "new_msg": 0
      }]
    }],
    "new_msg": 0
  }, {
    "id": "1692865106309943296",
    "name": "ア ナ ス イ シ リ ー ズ ",
    "icon": "https://six-1257051386.picgz.myqcloud.com/1e986bfe89854e458b7a2486fe1d8c5d..png",
    "splash": "",
    "owner": 0,
    "owner_id": "198AA2B62D8F9B296A9391739D27474B",
    "permissions": 0,
    "region": "",
    "afk_channel_id": "",
    "afk_timeout": 0,
    "embed_enabled": 0,
    "embed_channel_id": "",
    "verification_level": 0,
    "default_message_notifications": 0,
    "explicit_content_filter": 0,
    "features": "",
    "sign": "",
    "tags": "",
    "application_id": "",
    "mfa_level": 0,
    "system_channel_id": "1692865108147048448",
    "widget_channel_id": "",
    "widget_enabled": 0,
    "joined_at": "2019-01-09 19:44:06",
    "unavailable": 0,
    "large": 0,
    "member_count": 12,
    "join_type": 0,
    "notice": "",
    "channel_id_list": ["1692865108147048448", "1692874914228473856"],
    "manage_guild": false,
    "manage_channel": false,
    "unfold": true,
    "group_channels": [{
      "group_id": "-1",
      "group_name": "未分类",
       "channels": []
    }, {
      "group_id": "1692865106314137600",
      "group_name": "默认分组",
      "channels": [{
        "id": "1692865108147048448",
        "type": 0,
        "name": "默认频道",
        "topic": "",
        "nsfw": 0,
        "last_message_id": "",
        "bitrate": 0,
        "user_limit": 0,
        "icon": "",
        "owner_id": "198AA2B62D8F9B296A9391739D27474B",
        "parent_id": "1692865106309943296",
        "application_id": "",
        "last_pin_timestamp": "2019-01-09 14:28:20",
        "group_id": "1692865106314137600",
        "cloud_live_roomid": 427,
        "allowed_messages": 1,
        "how_long_allowed_messages": 0,
        "password": "",
        "position": 1692865109577306000,
        "new_msg": 0
      }, {
        "id": "1692874914228473856",
        "type": 0,
        "name": "测试专用",
        "topic": "",
        "nsfw": 0,
        "last_message_id": "",
        "bitrate": 0,
        "user_limit": 0,
        "icon": "",
        "owner_id": "198AA2B62D8F9B296A9391739D27474B",
        "parent_id": "1692865106309943296",
        "application_id": "",
        "last_pin_timestamp": "2019-01-08 09:32:33",
        "group_id": "1692865106314137600",
        "cloud_live_roomid": 418,
        "allowed_messages": 1,
        "how_long_allowed_messages": 0,
        "password": "",
        "position": 1692874915616788500,
        "new_msg": 1
      }]
    }]
  }, {
    "id": "1692890176361205760",
    "name": "home",
    "icon": "https://six-1257051386.picgz.myqcloud.com/e9473708c2bd4810aa84a5e1e2f674c7..jfif",
    "splash": "",
    "owner": 0,
    "owner_id": "5DCCC6C6CD7274B104650BCA846D4358",
    "permissions": 0,
    "region": "",
    "afk_channel_id": "",
    "afk_timeout": 0,
    "embed_enabled": 0,
    "embed_channel_id": "",
    "verification_level": 0,
    "default_message_notifications": 0,
    "explicit_content_filter": 0,
    "features": "",
    "sign": "",
    "tags": "",
    "application_id": "",
    "mfa_level": 0,
    "system_channel_id": "1692890178378665984",
    "widget_channel_id": "",
    "widget_enabled": 0,
    "joined_at": "2019-01-09 19:44:31",
    "unavailable": 0,
    "large": 0,
    "member_count": 3,
    "join_type": 0,
    "notice": "",
    "channel_id_list": ["1692890178378665984", "1692890238285910016"],
    "manage_guild": true,
    "manage_channel": true,
    "unfold": false,
    "group_channels": [{
      "group_id": "-1",
      "group_name": "未分类",
       "channels": []
    }, {
      "group_id": "1692890176361205761",
      "group_name": "默认分组",
      "channels": [{
        "id": "1692890178378665984",
        "type": 0,
        "name": "默认频道",
        "topic": "",
        "nsfw": 0,
        "last_message_id": "",
        "bitrate": 0,
        "user_limit": 0,
        "icon": "",
        "owner_id": "5DCCC6C6CD7274B104650BCA846D4358",
        "parent_id": "1692890176361205760",
        "application_id": "",
        "last_pin_timestamp": "2019-01-07 16:07:57",
        "group_id": "1692890176361205761",
        "cloud_live_roomid": 413,
        "allowed_messages": 1,
        "how_long_allowed_messages": 0,
        "password": "",
        "position": 1692890180433875000,
        "new_msg": 0
      }, {
        "id": "1692890238285910016",
        "type": 0,
        "name": "ch1",
        "topic": "",
        "nsfw": 0,
        "last_message_id": "",
        "bitrate": 0,
        "user_limit": 0,
        "icon": "",
        "owner_id": "5DCCC6C6CD7274B104650BCA846D4358",
        "parent_id": "1692890176361205760",
        "application_id": "",
        "last_pin_timestamp": "2019-01-07 16:05:38",
        "group_id": "1692890176361205761",
        "cloud_live_roomid": 412,
        "allowed_messages": 1,
        "how_long_allowed_messages": 0,
        "password": "",
        "position": 1692890239678419000,
        "new_msg": 0
      }]
    }],
    "new_msg": 0
  }]
  const chanFormat = new schema.Entity('channels');
  const grFormat = new schema.Entity(
    'group_channels', {
      channels: [chanFormat]
    }, {
      idAttribute: value => value.group_id,
    },
  );
  const guildFormat = new schema.Entity(
    'guildList', {
      channels: chanFormat,
      group_channels: [grFormat],
    }
  );
  const normalizedData = normalize(fev, [guildFormat]);
  console.log('55555555555 ', normalizedData)

  
console.log(JSON.stringify(normalizedData));